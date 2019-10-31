// Models:
var Chat = require("../models/chat-model");
var ChatHistory = require("../models/chat-history-model");
var User = require("../models/user-model");

module.exports = class ChatService {
  constructor() {}

  getByUserId(userType, id) {
    return new Promise((resolve, reject) => {
      Chat.getByUserId(userType, id, (err, res) => {
        if (err) {
          reject(err);
        } else if (res.length === 0) {
          resolve(res);
        } else {
          var chats = res;
          this.buildUpChat(chats)
            .then(res => {
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        }
      });
    });
  }

  getByChatId(id) {
    return new Promise((resolve, reject) => {
      Chat.getById(id, (err, res) => {
        if (err) {
          reject(err);
        } else if (res.length === 0) {
          resolve(res);
        } else {
          var chats = res;
          this.buildUpChat(chats)
            .then(res => {
              resolve(res[0]);
            })
            .catch(err => {
              reject(err);
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
        } else {
          resolve(res);
        }
      });
    });
  }

  buildUpChat(chats) {
    return new Promise((resolve, reject) => {
      User.getAll((err, userRes) => {
        if (err) {
          reject(err);
        } else {
          chats.forEach(chat => {
            let user = userRes.filter(x => x.id == chat.userId)[0];
            let provider = userRes.filter(x => x.id == chat.providerId)[0];
            chat.userName = user.firstName + " " + user.lastName;
            chat.userImgUrl = user.imgUrl;
            chat.providerName = provider.firstName + " " + provider.lastName;
            chat.providerImgUrl = provider.imgUrl;
          });
          this.buildUpChatHistory(chats)
            .then(hisRes => {
              resolve(hisRes);
            })
            .catch(hisErr => {
              reject(hisErr);
            });
        }
      });
    });
  }

  buildUpChatHistory(chats) {
    return new Promise((resolve, reject) => {
      ChatHistory.getAll((err, chatHistory) => {
        if (err) {
          reject(err);
        } else {
          chats.forEach(chat => {
            chat.messages = chatHistory.filter(x => x.chatId === chat.id);
          });
          resolve(chats);
        }
      });
    });
  }

  create(chat) {
    return new Promise((resolve, reject) => {
      Chat.getAll((err, res) => {
        if (err) {
          reject(err);
        } else {
          const userChats = res.filter(x => x.userId == chat.userId);
          const existingChat = userChats.filter(
            x => x.providerId == chat.providerId
          );
          if (existingChat.length) {
            this.createMessage({
              chatId: existingChat[0].id,
              text: chat.messages[0].text,
              senderId: chat.messages[0].senderId
            })
              .then(msgRes => {
                resolve(msgRes);
              })
              .catch(msgErr => {
                reject(msgErr);
              });
          } else {
            const newChat = new Chat(chat);
            this.createChat(newChat, chat)
              .then(chatRes => {
                resolve(chatRes);
              })
              .catch(chatErr => {
                reject(chatErr);
              });
          }
        }
      });
    });
  }

  createChat(newChat, chat) {
    return new Promise((resolve, reject) => {
      Chat.create(newChat, (err, res) => {
        if (err) {
          reject(err);
        } else {
          this.createMessage({
            chatId: res,
            text: chat.messages[0].text,
            senderId: chat.messages[0].senderId
          })
            .then(megRes => {
              resolve(res);
            })
            .catch(msgErr => {
              reject(msgErr);
            });
        }
      });
    });
  }

  createMessage(message) {
    return new Promise((resolve, reject) => {
      const newMsg = new ChatHistory(message);
      ChatHistory.create(newMsg, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  removeByID(id) {
    return new Promise((resolve, reject) => {
      Chat.remove(id, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
