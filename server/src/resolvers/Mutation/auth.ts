import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import { promisify } from "util";
import { transport } from "../../mail";
import { resetPasswordEmail } from "./../../mailTemplates/resetPassword";
import { Context } from "../../utils";

export const auth = {
  async signup(parent, args, ctx: Context) {
    args.email = args.email.toLowerCase();
    const passwordDigest = await bcrypt.hash(args.password, 10);
    delete args.password;

    const user = await ctx.prisma.createUser({
      ...args,
      password: passwordDigest
    });

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
    });

    return user;
  },

  async login(parent, { email, password }, ctx: Context) {
    email = email.toLowerCase();
    const user = await ctx.prisma.user({ email });
    if (!user) {
      throw new Error(`No such user found for email: ${email}`);
    }

    const hasValidCredentials = await bcrypt.compare(password, user.password);

    if (!hasValidCredentials) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
    });

    return user;
  },

  async signout(parent, args, ctx: Context, info) {
    ctx.response.clearCookie("token");
    return { message: "You signed out succesfully" };
  },

  async requestResetPassword(parent, args, ctx, info) {
    const user = await ctx.prisma.user({ email: args.email });

    if (!user) {
      throw new Error(`No user found for email ${args.email}`);
    }

    const resetToken = (await promisify(randomBytes)(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 3 * 3600000; // 3 hours
    const res = await ctx.prisma.updateUser({
      where: { email: args.email },
      data: {
        resetToken,
        resetTokenExpiry
      }
    });

    // Send email with link to reset the password
    transport.sendMail({
      from: "jan.czizikow@gmail.com",
      to: user.email,
      subject: "Set up a new password for Splitit",
      html: resetPasswordEmail({ token: resetToken, name: user.name })
    });

    return { message: `Password reset e-mail sent to '${args.email}'` };
  },

  async resetPassword(parent, args, ctx, info) {
    const { password, confirmPassword, resetToken } = args;

    if (password !== confirmPassword) {
      throw new Error("Passwords don't match");
    }

    const [user] = await ctx.prisma.users({
      where: {
        resetToken: resetToken,
        resetTokenExpiry_gte: Date.now() - 3 * 3600000
      }
    });

    if (!user) {
      throw new Error("Reset password token is either invalid or expired");
    }

    const passwordDigest = await bcrypt.hash(password, 10);
    const updatedUser = await ctx.prisma.updateUser({
      where: { email: user.email },
      data: {
        password: passwordDigest,
        resetToken: null,
        resetTokenExpiry: null
      }
    });

    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
    });

    return updatedUser;
  },

  async updateUser(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("You must be logged in!");
    }

    const updatedUser = await ctx.prisma.updateUser(
      {
        where: { id: ctx.request.userId },
        data: {
          ...args
        }
      },
      info
    );

    return updatedUser;
  }
};
