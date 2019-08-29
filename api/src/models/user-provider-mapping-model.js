// Singleton DB
const DB = require("../database/database");
const db = DB.instance();

//Object constructor
var UserProviderMapping = function(userProviderMapping) {
  this.id;
  this.userId = userProviderMapping.userId;
  this.providerId = userProviderMapping.providerId;
  this.dateCreated = new Date();
};

// Object methods
UserProviderMapping.create = function(newUserProviderMapping, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "INSERT INTO user_provider-mapping set ?",
        newUserProviderLink,
        function(err, res) {
          if (err) {
            console.log("error: ", err);
            result(err, null);
          } else {
            console.log(res.insertId);
            result(null, res.insertId);
          }
          mysqlConn.release();
        }
      );
    })
    .catch(err => {
      result(err, null);
    });
};

UserProviderMapping.getAll = function(result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("Select * from user_provider-mapping", function(
        err,
        res
      ) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          mysqlConn.release();
        } else {
          console.log("User_provider-mapping : ", res);
          result(null, res);
        }
        mysqlConn.release();
      });
    })
    .catch(err => {
      result(err, null);
    });
};

UserProviderMapping.getById = function(id, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "Select * from user_provider-mapping where id = ? ",
        id,
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

UserProviderMapping.updaterById = function(id, userProviderMapping, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "UPDATE user_provider-mapping SET userId = ?,providerId = ? WHERE id = ?",
        [userProviderMapping.userId, userProviderMapping.providerId, id],
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

UserProviderMapping.remove = function(id, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "DELETE FROM user_provider-mapping WHERE id = ?",
        id,
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

module.exports = UserProviderMapping;
