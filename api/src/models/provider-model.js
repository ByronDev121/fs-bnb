// Singleton DB
const DB = require("../database/database");
const db = DB.instance();

// Object constructor
var Provider = function(provider) {
  this.id;
  this.name = provider.name;
  this.email = provider.email;
  this.address = provider.address;
  this.paymentdetails = {};
  this.dateCreated = new Date();
};

// Object methods
Provider.create = function(newProvider, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("INSERT INTO provider set ?", newProvider, function(
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

Provider.getAll = function(result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("Select * from provider", function(err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          console.log("Providers : ", res);
          result(null, res);
        }
        mysqlConn.release();
      });
    })
    .catch(err => {
      result(err, null);
    });
};

Provider.getById = function(providerId, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "Select * from provider where id = ? ",
        providerId,
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

Provider.updaterById = function(providerId, provider, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "UPDATE provider SET name = ?,adress = ?,email = ?,paymentdetailsId = ? WHERE id = ?",
        [
          provider.name,
          provider.adress,
          provider.email,
          provider.paymentdetailsId,
          providerId
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

Provider.remove = function(providerId, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "DELETE FROM provider WHERE id = ?",
        providerId,
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

module.exports = Provider;
