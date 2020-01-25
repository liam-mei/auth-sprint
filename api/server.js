// Import Dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// Import Routers
const authRouter = require("../auth/auth-router.js");
const jokesRouter = require("../jokes/jokes-router.js");

// Import Middleware
const authenticate = require("../auth/authenticate-middleware.js");
const { sanityCheck, wrongRoute, errorHandler } = require("../middleware");

// Use Middleware
const server = express();
server.use(helmet());
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

// Use Routers
server.use("/api/auth", authRouter);
server.use("/api/jokes", authenticate, jokesRouter);

// Use Custom Middleware
server.get("/", sanityCheck);
server.use(wrongRoute);
server.use(errorHandler);

module.exports = server;
