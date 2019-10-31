// Singleton DB
const DB = require("../database/database");
const db = DB.instance();

// Object constructor
var Chat = function(chat) {
  this.id;
  this.userId = chat.userId;
  this.providerId = chat.providerId;
  this.dateCreated = new Date();
};

// Object Methods
Chat.create = function(chat, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("INSERT INTO chat set ?", chat, function(err, res) {
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

Chat.getAll = function(result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(`Select * from chat`, function(err, res) {
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

Chat.getByUserId = function(userType, id, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        `Select * from chat where ${userType}id = ` + id,
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

Chat.getById = function(id, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(`Select * from chat where id = ` + id, function(
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
      mysqlConn.query("DELETE FROM chat WHERE id = " + ChatId, function(
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
