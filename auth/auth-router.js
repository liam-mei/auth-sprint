const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../database/userModel");
const secrets = require("../secrets");
const { checkUsernameUnique } = require("../middleware");

router.post("/register", checkUsernameUnique, async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const newUser = await userModel.addOne({ username, password });
    // At this point you can decide to make a token/session so that they're logged in upon registration
    // If not, push them to login page
    res.json({ message: `Welcome ${newUser.username}`, newUser });
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  // implement login
  try {
    const { username, password } = req.body;
    const user = await userModel.findOneBy({ username });
    const passwordValid = bcrypt.compare(password, user.password);
    if (user && passwordValid) {
      // Session Implementation
      // req.session.user = user;
      // res.json({message: `Welcome ${username}`})
      // Token Implementation
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
