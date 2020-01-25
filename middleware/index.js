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

module.exports = {
  sanityCheck,
  wrongRoute,
  errorHandler
};
