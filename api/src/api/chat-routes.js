const express = require("express");
const router = express.Router();

const ChatService = require("../services/chat-service");
const chatService = new ChatService();

router.get("/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  chatService
    .getByUserId(userId)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/history/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  chatService
    .getByUserId(userId)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/", (req, res) => {
  const chat = req.body;
  chatService
    .create(chat)
    .then(result => {
      res.send({ res: result });
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/history", (req, res) => {
  const chatMessage = req.body;
  chatService
    .createMessage(chatMessage)
    .then(result => {
      res.send({ res: result });
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  chatService
    .removeByID(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

module.exports = router;
