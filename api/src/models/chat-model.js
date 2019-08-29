// Singleton DB
const DB = require("../database/database");
const db = DB.instance();

// Object constructor
var Chat = function(chat) {
  this.id;
  this.userId = chat.userId;
  this.userImgUrl = chat.userImgUrl;
  this.providerUserId = chat.providerUserId;
  this.providerUserImgUrl = chat.providerUserImgUrl;
  this.providerUserName = chat.providerUserName;
  this.latestTextId;
};

// Object Methods
Chat.create = function(newChatMsg, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("INSERT INTO chat set ?", newChatMsg, function(err, res) {
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

Chat.getByUserId = function(userId, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("Select * from chat where userId = ? ", userId, function(
        err,
        res
      ) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          result(null, res);
        }
        mysqlConn.release();
      });
    })
    .catch(err => {
      result(err, null);
    });
};

Chat.remove = function(ChatId, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("DELETE FROM chat WHERE id = ?", ChatId, function(
        err,
        res
      ) {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
        mysqlConn.release();
      });
    })
    .catch(err => {
      result(err, null);
    });
};

module.exports = Chat;
