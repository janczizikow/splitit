import { GraphQLServer } from "graphql-yoga";
import * as cookieParser from "cookie-parser";
import * as jwt from "jsonwebtoken";
import { prisma } from "./generated/prisma-client";
import resolvers from "./resolvers";
import { CONFIG } from "./config";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => ({
    ...request,
    prisma
  })
});

// server middleware
server.express.use(cookieParser());
server.express.use(async (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // TODO: fix this
    // @ts-ignore
    req.userId = userId;
  }

  next();
});

// start server
server.start(CONFIG, () =>
  console.log(`Server is running on http://localhost:${CONFIG.port}`)
);
