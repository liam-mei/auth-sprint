// Import Dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
// const cookieParser = require("cookie-parser");

// Swagger Documentation
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// Import Routers
const authRouter = require("./auth-router.js");
const jokesRouter = require("./jokes-router.js");

// Import Middleware
const authenticate = require("../middleware/authenticate-middleware.js");
const {
  sanityCheck,
  wrongRoute,
  errorHandler,
  usernameExists,
  checkUsernamePasswordExists
} = require("../middleware");

// Use Middleware
const server = express();
server.use(helmet());
server.use(cors());
server.use(morgan("dev"));

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Cookie Parser if you want to use cookies for token
// server.use(cookieParser());
server.use(express.json());

// Sessions Things If We Want Sessions
// const session = require("express-session");
// const KnexSessionStore = require("connect-session-knex")(session);
// const dbConfig = require("../database/dbConfig");
// const configs = require("../configs");
// server.use(session(configs.sessionConfig));

// Use Routers
server.use(
  "/api/auth",
  checkUsernamePasswordExists,
  usernameExists,
  authRouter
);
server.use("/api/jokes", authenticate, jokesRouter);

// Use Custom Middleware
server.get("/", sanityCheck);
server.use(wrongRoute);
server.use(errorHandler);

module.exports = server;
