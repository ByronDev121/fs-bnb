// Singleton DB
const DB = require("../database/database");
const db = DB.instance();

// Object constructor
var Booking = function(booking) {
  this.id;
  this.listingId = booking.listingId;
  this.userId = booking.userId;
  this.dateFrom = booking.dateFrom;
  this.dateTo = booking.dateTo;
  this.status = booking.status;
  this.dateCreated = new Date();
};

// Object Methods
Booking.create = async function(booking, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("INSERT INTO booking set ?", booking, function(err, res) {
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

Booking.getAll = async function(result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("Select * from booking", function(err, res) {
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

Booking.getById = async function(bookingId, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("Select * from booking where id = " + bookingId, function(
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

Booking.getByUserId = async function(userId, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "Select * from booking where userId = " + userId,
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

Booking.getByListingId = async function(id, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("Select * from booking where listingId = " + id, function(
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

Booking.updateById = async function(bookingId, booking, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "UPDATE Booking SET dateFrom = ?,dateTo = ?,status = ? WHERE id = ?",
        [booking.dateFrom, booking.dateTo, booking.status, bookingId],
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

Booking.deleteById = async function(bookingId, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("DELETE FROM booking WHERE id = " + bookingId, function(
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

module.exports = Booking;
