require("dotenv").config({ path: ".env" });
const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");

const CONFIG = {
  port: 4000,
  cors: {
    credentials: true,
    origin: process.env.CLIENT_URL
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Mutation,
    Query
  },
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: process.env.PRISMA_ENDPOINT,
      // secret: process.env.PRISMA_SECRET,
      debug: false
    })
  })
});

server.express.use(cookieParser());

// JWT middleware
server.express.use(async (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    const { userId } = jwt.verify(token, process.env.SECRET);
    req.userId = userId;
  }

  next();
});

// start server
server.start(CONFIG, () => {
  console.log(`Server is running on http://localhost:${CONFIG.port}`);
});
