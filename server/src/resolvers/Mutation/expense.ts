import { Context } from "../../utils";

export const expense = {
  async createExpense(parent, args, ctx: Context) {
    if (!ctx.request.userId) {
      throw new Error("You must be logged in!");
    }

    const expense = await ctx.prisma.createExpense({
      ...args,
      user: {
        connect: {
          id: ctx.request.userId
        }
      }
    });

    return expense;
  },
  async updateExpense(parent, args, ctx: Context) {
    const updates = { ...args };
    delete updates.id;
    return ctx.prisma.updateExpense({ data: updates, where: { id: args.id } });
  },
  async deleteExpense(parent, args, ctx: Context) {
    const { id } = args;
    const expense = await ctx.prisma.expense({ id });
    // const ownsExpense = expense.user.id === ctx.request.userId;
    // if (!ownsExpense) {
    //   throw new Error("Permission to delete expense denied");
    // }

    return ctx.prisma.deleteExpense({ id });
  }
};
