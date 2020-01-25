const userModel = require("../database/userModel");

function sanityCheck(req, res, next) {
  res.json({ message: "I work" });
}

function wrongRoute(req, res, next) {
  res.status(401).json({ error: "Route does not exist" });
}

function errorHandler(err, req, res, next) {
  console.log("Global Error: ", err);
  res.status(err.status || 500).json({ message: err.message, err });
}

function checkUsernamePasswordExists(username, password) {
  if (!username || !password)
    next({ status: 400, message: "username and password required" });
}

async function checkUsernameUnique(username) {
  const user = await userModel.findOneBy({ username });
  if (user)
    next({
      status: 400,
      message: `Username ${username} already exists, please chose another name`
    });
}

module.exports = {
  sanityCheck,
  wrongRoute,
  errorHandler,
  checkUsernamePasswordExists,
  checkUsernameUnique
};
