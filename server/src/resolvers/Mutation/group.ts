import { Context } from "../../utils";

export const group = {
  async createGroup(parent, args, ctx: Context) {
    if (!ctx.request.userId) {
      throw new Error("You must be logged in!");
    }

    const group = await ctx.prisma.createGroup({
      name: args.name
    });

    return group;
  },
  async updateGroup(parent, args, ctx: Context) {
    const updates = { ...args };
    delete updates.id;
    return ctx.prisma.updateGroup({ data: updates, where: { id: args.id } });
  },
  async deleteGroup(parent, args, ctx: Context) {
    const { id } = args;
    // const group = await ctx.prisma.group({ id });
    // const ownsExpense = expense.user.id === ctx.request.userId;
    // if (!ownsExpense) {
    //   throw new Error("Permission to delete expense denied");
    // }

    return ctx.prisma.deleteGroup({ id });
  }
};
