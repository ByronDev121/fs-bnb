const express = require("express");
const router = express.Router();

const ChatService = require("../services/chat-service");
const chatService = new ChatService();

router.get("/:userType/:id", (req, res) => {
  const userType = req.params.userType;
  const id = parseInt(req.params.id);
  chatService
    .getByUserId(userType, id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/:chatId", (req, res) => {
  const chatId = req.params.chatId;
  chatService
    .getByChatId(chatId)
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
