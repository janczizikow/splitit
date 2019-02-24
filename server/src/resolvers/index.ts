import { Query } from "./Query";
import { auth } from "./Mutation/auth";
import { expense } from "./Mutation/expense";
import { group } from "./Mutation/group";

export default {
  Query,
  Mutation: {
    ...auth,
    ...expense,
    ...group
  }
};
