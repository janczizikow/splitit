import { getUserId, Context } from "../utils";

export const Query = {
  me(parent, args, ctx: Context) {
    if (!ctx.request.userId) {
      return null;
    }

    return ctx.prisma.user({ id: ctx.request.userId });
  },
  expense(parent, { id }, ctx: Context) {
    return ctx.prisma.expense({ id });
  },
  groups(parent, args, ctx: Context) {
    return ctx.prisma.groups();
  }
};
