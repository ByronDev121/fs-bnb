const express = require("express");
const router = express.Router();

const UserService = require("../services/user-service");
const userService = new UserService();

const UploadService = require("../services/upload-service");
const uploadService = new UploadService();

router.get("/", (req, res) => {
  userService
    .get()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  userService
    .getById(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/", (req, res) => {
  const user = req.body;
  userService
    .create(user)
    .then(result => {
      res.send({ res: result });
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/update", (req, res) => {
  const user = req.body;
  userService
    .update(user)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  userService
    .removeByID(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/image/:userId", (req, res) => {
  const userId = req.params.userId
  uploadService
    .upload(req)
    .then(imgUrl => {
      userService
        .setImageUrl(userId, imgUrl)
        .then(user => {
          res.json({ user });
        })
        .catch(err => {
          res.status(400).json({ msg: err });
        });
    })
    .catch(err => {
      res.status(400).json({ msg: err });
    });
});

module.exports = router;
