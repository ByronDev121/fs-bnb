// Singleton DB
const DB = require("../database/database");
const db = DB.instance();

// Object constructor
var ChatHistory = function(chat) {
  this.id;
  this.chatId = chat.chatId;
  this.text = chat.text;
  this.dateTimeCreate = new Date();
};

// Object methods
ChatHistory.create = function(newChatMsg, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("INSERT INTO chat_history set ?", newChatMsg, function(
        err,
        res
      ) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          console.log(res.insertId);
          result(null, res.insertId);
        }
        mysqlConn.release();
      });
    })
    .catch(err => {
      result(err, null);
    });
};

ChatHistory.getByChatId = function(chatId, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "Select * from chat_history where chatId = ? ",
        chatId,
        function(err, res) {
          if (err) {
            console.log("error: ", err);
            result(err, null);
          } else {
            result(null, res);
          }
          mysqlConn.release();
        }
      );
    })
    .catch(err => {
      result(err, null);
    });
};

ChatHistory.remove = function(ChatMsgId, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "DELETE FROM chat_history WHERE id = ?",
        [ChatMsgId],
        function(err, res) {
          if (err) {
            console.log("error: ", err);
            result(null, err);
          } else {
            result(null, res);
          }
          mysqlConn.release();
        }
      );
    })
    .catch(err => {
      result(err, null);
    });
};

module.exports = ChatHistory;
