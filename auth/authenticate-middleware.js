const jwt = require("jsonwebtoken");
const secrets = require("../configs/secrets");

module.exports = (req, res, next) => {
  try {
    // if we want to have cookies using token
    // const token = req.cookies.token

    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secrets.secret);
    next();
  } catch (err) {
    next({ ...err, status: 401 });
  }
};
