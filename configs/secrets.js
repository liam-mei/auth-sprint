module.exports = {
  secret: process.env.SECRET || "I am default secret",
  port: process.env.PORT || 5000,
  environment: process.env.NODE_ENV || "development"
};
