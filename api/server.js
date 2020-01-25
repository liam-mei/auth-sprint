// Import Dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// Import Routers
const authRouter = require("../auth/auth-router.js");
const jokesRouter = require("../jokes/jokes-router.js");

// Import Middleware
const authenticate = require("../auth/authenticate-middleware.js");
const {
  sanityCheck,
  wrongRoute,
  errorHandler,
  checkUsernamePasswordExists
} = require("../middleware");

// Use Middleware
const server = express();
server.use(helmet());
server.use(cors());
server.use(morgan("dev"));

// Cookie Parser if you want to use cookies for token
// server.use(cookieParser());
server.use(express.json());

// Sessions Things If We Want Sessions
// const session = require("express-session");
// const KnexSessionStore = require("connect-session-knex")(session);
// const dbConfig = require("../database/dbConfig");
// server.use(
//   session({
//     name: "monkey", //sid
//     secret: process.env.SECRET || "this is a really good secret...", // should be a env var
//     cookie: {
//       maxAge: 1000 * 60 * 60, // in milliseconds
//       secure: false, //true in production - access only over https
//       httpOnly: true // can cookie be accessed using js
//     },
//     resave: false, // recreate session even if nothing has changed
//     saveUninitialized: true, // GDPR compliance against setting cookies automatically should be false for production
//     store: new KnexSessionStore({
//       knex: dbConfig,
//       createTable: true
//     })
//   })
// );

// Use Routers
server.use("/api/auth", checkUsernamePasswordExists, authRouter);
server.use("/api/jokes", authenticate, jokesRouter);

// Use Custom Middleware
server.get("/", sanityCheck);
server.use(wrongRoute);
server.use(errorHandler);

module.exports = server;
