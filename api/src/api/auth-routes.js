//Express:
const express = require("express");
const router = express.Router();

//Services:
const AuthService = require("../services/auth-service");
const authService = new AuthService();

router.post("/register", (req, res) => {
  authService
    .register(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(400).json({ msg: err });
    });
});

router.post("/login", (req, res) => {
  console.log("Login request from", req.body.email);
  authService
    .login(req.body)
    .then(jwt => {
      console.log("res:", jwt);
      res.json(jwt);
    })
    .catch(err => {
      res.status(400).json({ msg: err });
    });
});

module.exports = router;
