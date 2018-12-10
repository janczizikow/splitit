const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const { transport } = require("../mail");
const { resetPasswordEmail } = require("../mailTemplates/resetPassword");

const Mutation = {
  async signup(parent, args, ctx, info) {
    const { email } = args.email.toLowerCase();
    const passwordDigest = await bcrypt.hash(args.password, 10);
    delete args.password;

    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password: passwordDigest
        }
      },
      info
    );

    const token = jwt.sign({ userId: user.id }, process.env.SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
    });

    return user;
  },
  async login(parent, args, ctx, info) {
    const { email, password } = args;
    const user = await ctx.db.query.user({ where: { email } });

    if (!user) {
      throw new Error("User doesn't exist");
    }

    const hasValidCredentials = await bcrypt.compare(password, user.password);

    if (!hasValidCredentials) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ userId: user.id }, process.env.SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
    });

    return user;
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "You signed out succesfully" };
  },
  async requestResetPassword(parent, args, ctx, info) {
    const user = await ctx.db.query.user({ where: { email: args.email } });

    if (!user) {
      throw new Error(`No user found for email ${args.email}`);
    }

    const resetToken = (await promisify(randomBytes)(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 3 * 3600000; // 3 hours
    const res = await ctx.db.mutation.updateUser({
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

    const [user] = await ctx.db.query.users({
      where: {
        resetToken: resetToken,
        resetTokenExpiry_gte: Date.now() - 3 * 3600000
      }
    });

    if (!user) {
      throw new Error("Reset password token is either invalid or expired");
    }

    const passwordDigest = await bcrypt.hash(password, 10);
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password: passwordDigest,
        resetToken: null,
        resetTokenExpiry: null
      }
    });

    const token = jwt.sign({ userId: updatedUser.id }, process.env.SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
    });

    return updatedUser;
  }
};

module.exports = Mutation;
