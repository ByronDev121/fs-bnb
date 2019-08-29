// Singleton DB
const DB = require("../database/database");
const db = DB.instance();

// Object constructor
var User = function(user) {
  this.id;
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.email = user.email;
  this.cellPhone = user.cellPhone;
  this.password = user.password;
  this.imgUrl = user.imgUrl;
  this.role = user.role;
  this.dateCreated = new Date();
};

// Object constructor
User.create = function(newUser, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("INSERT INTO user set ?", newUser, function(err, res) {
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

User.getAll = function(result) {
  db.createConnection()
    .then(mysqlConn => {
      console.log("trying to query");
      mysqlConn.query("Select * from user", function(err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          console.log("Users : ", res);
          result(null, res);
        }
        mysqlConn.release();
      });
    })
    .catch(err => {
      result(err, null);
    });
};

User.getById = async function(userId, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("Select * from user where id = ? ", userId, function(
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

User.updateById = async function(userId, user, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "UPDATE user SET firstName = ?,role = ?,email = ?,password = ?,lastName = ?,cellPhone = ? WHERE id = ?",
        [
          user.firstName,
          user.role,
          user.email,
          user.password,
          user.lastName,
          user.cellPhone,
          userId
        ],
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

User.updateImageById = async function(userId, imgUrl, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "UPDATE user SET imgUrl = ? WHERE id = ?",
        [imgUrl, userId],
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

User.remove = async function(userId, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("DELETE FROM user WHERE id = ?", userId, function(
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

module.exports = User;
