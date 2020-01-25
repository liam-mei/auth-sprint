const jwt = require("jsonwebtoken");
const secrets = require("../secrets");

module.exports = (req, res, next) => {
  try {
    // if we want to have cookies using token
    // const token = req.cookies.token

    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secrets.secret);
    decoded ? next() : next({ status: 401, error: "token invalid" });
  } catch (err) {
    next(err);
  }
};
