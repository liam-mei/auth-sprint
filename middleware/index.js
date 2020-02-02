const userModel = require("../database/userModel");

function sanityCheck(req, res, next) {
  res.json({ message: "I work", db_url: process.env.DATABASE_URL });
}

function wrongRoute(req, res, next) {
  res.status(401).json({ error: "Route does not exist" });
}

function errorHandler(err, req, res, next) {
  console.log("Global Error: ", err);
  res.status(err.status || 500);
  delete err.status;
  res.json({ message: err.message, err });
}

function checkUsernamePasswordExists(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) {
    next({ status: 400, error: "username and password required" });
  } else {
    next();
  }
}

async function usernameExists(req, res, next) {
  const { username } = req.body;
  const user = await userModel.findOneBy({ username });
  req.user = user;
  next();
}

module.exports = {
  sanityCheck,
  wrongRoute,
  errorHandler,
  checkUsernamePasswordExists,
  usernameExists
};
