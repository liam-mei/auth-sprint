const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../database/userModel");
const secrets = require("../configs/secrets");

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  if (req.user)
    next({ status: 400, error: `Username ${req.user} already taken` });
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
    if (req.user) {
      const passwordValid = bcrypt.compare(password, req.user.password);
      if (passwordValid) {
        // Session Implementation
        // req.session.user = user;
        // res.json({message: `Welcome ${username}`})

        // Token Implementation
        const token = jwt.sign(req.user, secrets.secret, { expiresIn: "7d" });
        // If we want to use cookie for token instead of having user save it
        // res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 * 7 })  // cookie good for 7 days

        res.json({ message: `Welcome ${username}`, token });
      } else {
        next({ status: 401, error: "Invalid Credentials" });
      }
    } else {
      next({ status: 401, error: "User Doesn't Exist" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
