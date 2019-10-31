// Singleton DB
const DB = require("../database/database");
const db = DB.instance();

// Object constructor
var ListingImgMapping = function(listingImgMapping) {
  this.id;
  this.listingId = listingImgMapping.listingId;
  this.imgUrl = listingImgMapping.imgUrl;
  this.dateCreated = new Date();
};

//Object methods
ListingImgMapping.create = function(newListingImgMapping, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "INSERT INTO listing_imgurl_mapping set ?",
        newListingImgMapping,
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

ListingImgMapping.getAll = function(result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("Select * from listing_imgurl_mapping", function(
        err,
        res
      ) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          console.log("Listing_imgurl_mapping : ", res);
          result(null, res);
        }
        mysqlConn.release();
      });
    })
    .catch(err => {
      result(err, null);
    });
};

ListingImgMapping.getById = function(id, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "Select * from listing_imgurl_mapping where id = " + id,
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

ListingImgMapping.updaterById = function(id, listingImgLink, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "UPDATE listing_imgurl_mapping SET listingId = ?,imgUrl = ? WHERE id = ?",
        [listingImgLink.listingId, listingImgLink.imgUrl, id],
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

ListingImgMapping.remove = function(id, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "DELETE FROM listing_imgurl_mapping WHERE id = " + id,
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

module.exports = ListingImgMapping;
