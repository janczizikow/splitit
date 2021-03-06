export const typeDefs = /* GraphQL */ `type AggregateExpense {
  count: Int!
}

type AggregateGroup {
  count: Int!
}

type AggregateMember {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Expense {
  id: ID!
  title: String!
  image: String
  cost: Int!
  user: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ExpenseConnection {
  pageInfo: PageInfo!
  edges: [ExpenseEdge]!
  aggregate: AggregateExpense!
}

input ExpenseCreateInput {
  title: String!
  image: String
  cost: Int!
  user: UserCreateOneInput!
}

input ExpenseCreateManyInput {
  create: [ExpenseCreateInput!]
  connect: [ExpenseWhereUniqueInput!]
}

type ExpenseEdge {
  node: Expense!
  cursor: String!
}

enum ExpenseOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  image_ASC
  image_DESC
  cost_ASC
  cost_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ExpensePreviousValues {
  id: ID!
  title: String!
  image: String
  cost: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ExpenseScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  cost: Int
  cost_not: Int
  cost_in: [Int!]
  cost_not_in: [Int!]
  cost_lt: Int
  cost_lte: Int
  cost_gt: Int
  cost_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ExpenseScalarWhereInput!]
  OR: [ExpenseScalarWhereInput!]
  NOT: [ExpenseScalarWhereInput!]
}

type ExpenseSubscriptionPayload {
  mutation: MutationType!
  node: Expense
  updatedFields: [String!]
  previousValues: ExpensePreviousValues
}

input ExpenseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ExpenseWhereInput
  AND: [ExpenseSubscriptionWhereInput!]
  OR: [ExpenseSubscriptionWhereInput!]
  NOT: [ExpenseSubscriptionWhereInput!]
}

input ExpenseUpdateDataInput {
  title: String
  image: String
  cost: Int
  user: UserUpdateOneRequiredInput
}

input ExpenseUpdateInput {
  title: String
  image: String
  cost: Int
  user: UserUpdateOneRequiredInput
}

input ExpenseUpdateManyDataInput {
  title: String
  image: String
  cost: Int
}

input ExpenseUpdateManyInput {
  create: [ExpenseCreateInput!]
  update: [ExpenseUpdateWithWhereUniqueNestedInput!]
  upsert: [ExpenseUpsertWithWhereUniqueNestedInput!]
  delete: [ExpenseWhereUniqueInput!]
  connect: [ExpenseWhereUniqueInput!]
  disconnect: [ExpenseWhereUniqueInput!]
  deleteMany: [ExpenseScalarWhereInput!]
  updateMany: [ExpenseUpdateManyWithWhereNestedInput!]
}

input ExpenseUpdateManyMutationInput {
  title: String
  image: String
  cost: Int
}

input ExpenseUpdateManyWithWhereNestedInput {
  where: ExpenseScalarWhereInput!
  data: ExpenseUpdateManyDataInput!
}

input ExpenseUpdateWithWhereUniqueNestedInput {
  where: ExpenseWhereUniqueInput!
  data: ExpenseUpdateDataInput!
}

input ExpenseUpsertWithWhereUniqueNestedInput {
  where: ExpenseWhereUniqueInput!
  update: ExpenseUpdateDataInput!
  create: ExpenseCreateInput!
}

input ExpenseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  cost: Int
  cost_not: Int
  cost_in: [Int!]
  cost_not_in: [Int!]
  cost_lt: Int
  cost_lte: Int
  cost_gt: Int
  cost_gte: Int
  user: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ExpenseWhereInput!]
  OR: [ExpenseWhereInput!]
  NOT: [ExpenseWhereInput!]
}

input ExpenseWhereUniqueInput {
  id: ID
}

type Group {
  id: ID!
  name: String!
  expenses(where: ExpenseWhereInput, orderBy: ExpenseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Expense!]
  members(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Member!]
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  name: String!
  expenses: ExpenseCreateManyInput
  members: MemberCreateManyInput
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GroupPreviousValues {
  id: ID!
  name: String!
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateInput {
  name: String
  expenses: ExpenseUpdateManyInput
  members: MemberUpdateManyInput
}

input GroupUpdateManyMutationInput {
  name: String
}

input GroupWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  expenses_every: ExpenseWhereInput
  expenses_some: ExpenseWhereInput
  expenses_none: ExpenseWhereInput
  members_every: MemberWhereInput
  members_some: MemberWhereInput
  members_none: MemberWhereInput
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
}

scalar Long

type Member {
  id: ID!
  user: User
  balance: Int!
}

type MemberConnection {
  pageInfo: PageInfo!
  edges: [MemberEdge]!
  aggregate: AggregateMember!
}

input MemberCreateInput {
  user: UserCreateOneInput
  balance: Int!
}

input MemberCreateManyInput {
  create: [MemberCreateInput!]
  connect: [MemberWhereUniqueInput!]
}

type MemberEdge {
  node: Member!
  cursor: String!
}

enum MemberOrderByInput {
  id_ASC
  id_DESC
  balance_ASC
  balance_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MemberPreviousValues {
  id: ID!
  balance: Int!
}

input MemberScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  balance: Int
  balance_not: Int
  balance_in: [Int!]
  balance_not_in: [Int!]
  balance_lt: Int
  balance_lte: Int
  balance_gt: Int
  balance_gte: Int
  AND: [MemberScalarWhereInput!]
  OR: [MemberScalarWhereInput!]
  NOT: [MemberScalarWhereInput!]
}

type MemberSubscriptionPayload {
  mutation: MutationType!
  node: Member
  updatedFields: [String!]
  previousValues: MemberPreviousValues
}

input MemberSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MemberWhereInput
  AND: [MemberSubscriptionWhereInput!]
  OR: [MemberSubscriptionWhereInput!]
  NOT: [MemberSubscriptionWhereInput!]
}

input MemberUpdateDataInput {
  user: UserUpdateOneInput
  balance: Int
}

input MemberUpdateInput {
  user: UserUpdateOneInput
  balance: Int
}

input MemberUpdateManyDataInput {
  balance: Int
}

input MemberUpdateManyInput {
  create: [MemberCreateInput!]
  update: [MemberUpdateWithWhereUniqueNestedInput!]
  upsert: [MemberUpsertWithWhereUniqueNestedInput!]
  delete: [MemberWhereUniqueInput!]
  connect: [MemberWhereUniqueInput!]
  disconnect: [MemberWhereUniqueInput!]
  deleteMany: [MemberScalarWhereInput!]
  updateMany: [MemberUpdateManyWithWhereNestedInput!]
}

input MemberUpdateManyMutationInput {
  balance: Int
}

input MemberUpdateManyWithWhereNestedInput {
  where: MemberScalarWhereInput!
  data: MemberUpdateManyDataInput!
}

input MemberUpdateWithWhereUniqueNestedInput {
  where: MemberWhereUniqueInput!
  data: MemberUpdateDataInput!
}

input MemberUpsertWithWhereUniqueNestedInput {
  where: MemberWhereUniqueInput!
  update: MemberUpdateDataInput!
  create: MemberCreateInput!
}

input MemberWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  balance: Int
  balance_not: Int
  balance_in: [Int!]
  balance_not_in: [Int!]
  balance_lt: Int
  balance_lte: Int
  balance_gt: Int
  balance_gte: Int
  AND: [MemberWhereInput!]
  OR: [MemberWhereInput!]
  NOT: [MemberWhereInput!]
}

input MemberWhereUniqueInput {
  id: ID
}

type Mutation {
  createExpense(data: ExpenseCreateInput!): Expense!
  updateExpense(data: ExpenseUpdateInput!, where: ExpenseWhereUniqueInput!): Expense
  updateManyExpenses(data: ExpenseUpdateManyMutationInput!, where: ExpenseWhereInput): BatchPayload!
  upsertExpense(where: ExpenseWhereUniqueInput!, create: ExpenseCreateInput!, update: ExpenseUpdateInput!): Expense!
  deleteExpense(where: ExpenseWhereUniqueInput!): Expense
  deleteManyExpenses(where: ExpenseWhereInput): BatchPayload!
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createMember(data: MemberCreateInput!): Member!
  updateMember(data: MemberUpdateInput!, where: MemberWhereUniqueInput!): Member
  updateManyMembers(data: MemberUpdateManyMutationInput!, where: MemberWhereInput): BatchPayload!
  upsertMember(where: MemberWhereUniqueInput!, create: MemberCreateInput!, update: MemberUpdateInput!): Member!
  deleteMember(where: MemberWhereUniqueInput!): Member
  deleteManyMembers(where: MemberWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  expense(where: ExpenseWhereUniqueInput!): Expense
  expenses(where: ExpenseWhereInput, orderBy: ExpenseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Expense]!
  expensesConnection(where: ExpenseWhereInput, orderBy: ExpenseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExpenseConnection!
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  member(where: MemberWhereUniqueInput!): Member
  members(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Member]!
  membersConnection(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MemberConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  expense(where: ExpenseSubscriptionWhereInput): ExpenseSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  member(where: MemberSubscriptionWhereInput): MemberSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  name: String!
  avatar: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  name: String!
  avatar: String
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
  name_ASC
  name_DESC
  avatar_ASC
  avatar_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  name: String!
  avatar: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  name: String
  avatar: String
}

input UserUpdateInput {
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  name: String
  avatar: String
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  name: String
  avatar: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: Float
  resetTokenExpiry_not: Float
  resetTokenExpiry_in: [Float!]
  resetTokenExpiry_not_in: [Float!]
  resetTokenExpiry_lt: Float
  resetTokenExpiry_lte: Float
  resetTokenExpiry_gt: Float
  resetTokenExpiry_gte: Float
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`