// Models:
var Chat = require("../models/chat-model");
var ChatHistory = require("../models/chat-history-model");
var User = require("../models/user-model");

module.exports = class ChatService {
  constructor() {}

  getByUserId(id) {
    return new Promise((resolve, reject) => {
      Chat.getByUserId(id, (err, res) => {
        if (err) {
          reject(err);
        } else if (res.length === 0) {
          resolve(chats);
        } else {
          var chats = res;
          var chatIds = res.map(x => x.id);
          this.getHistoryByChatId(chatIds).then(res => {
            chats.forEach(chat => {
              chat.messages = [];
              res.forEach(message => {
                if (message.chatId === chat.id) {
                  chat.messages.push(message);
                }
              });
            });
            resolve(chats);
          });
        }
      });
    });
  }

  getHistoryByChatId(id) {
    return new Promise((resolve, reject) => {
      ChatHistory.getByChatId(id, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  create(chat) {
    return new Promise((resolve, reject) => {
      User.getById(chat.userId, (err, res) => {
        if (err) {
          reject(err);
        } else {
          chat.userImgUrl = res.imgUrl;
        }
        User.getById(chat.providerUserId, (err, res) => {
          if (err) {
            reject(err);
          } else {
            chat.providerUserImgUrl = res.imgUrl;
            chat.providerUserName = res.firstName + " " + res.LastName;
          }
          Chat.create(chat, (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          });
        });
      });
    });
  }

  createMessage(message) {
    return new Promise((resolve, reject) => {
      ChatHistory.create(message, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  removeByID(id) {
    return new Promise((resolve, reject) => {
      Chat.remove(id, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }
};
