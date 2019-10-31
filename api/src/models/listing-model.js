// Singleton DB
const DB = require("../database/database");
const db = DB.instance();

// Object constructor
var Listing = function(listing) {
  this.id;
  this.providerId = listing.providerId || "";
  this.name = listing.name || "";
  this.shortDescription = listing.shortDescription || "";
  this.longDescription = listing.longDescription || "";
  this.guests = listing.guests || "";
  this.beds = listing.beds || "";
  this.baths = listing.baths || "";
  this.amenities = listing.amenities || "";
  this.location = listing.location || "";
  this.price = listing.price || null;
  this.dateCreated = new Date();
};

// Object constructor
Listing.create = function(newListing, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("INSERT INTO listing set ?", newListing, function(
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

// "Select * from listings left join listing_imgurl_mapping on listings.id = listing_imgurl_mapping.listingId;"
Listing.getAll = function(result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("Select * from listing", function(err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          mysqlConn.release();
        }
        let listings = res;
        mysqlConn.query(
          "SELECT * FROM listing_imgurl_mapping WHERE listingId IN (SELECT id FROM listing);",
          function(err, res) {
            if (err) {
              console.log("error: ", err);
              result(err, null);
            } else {
              listings.forEach(listing => {
                listing.imgUrl = [];
                res.forEach(imgUrl => {
                  if (imgUrl.listingId == listing.id) {
                    listing.imgUrl.push(imgUrl.imgUrl);
                  }
                });
              });
              console.log("Users : ", res);
              result(null, listings);
            }
            mysqlConn.release();
          }
        );
      });
    })
    .catch(err => {
      result(err, null);
    });
};

Listing.getById = function(listingId, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "Select * from listing where id = ? ",
        listingId,
        function(err, res) {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            mysqlConn.release();
          } else {
            var listing = res;
            mysqlConn.query(
              "SELECT * FROM listing_imgurl_mapping WHERE listingId IN (SELECT id FROM listing);",
              function(err, res) {
                if (err) {
                  console.log("error: ", err);
                  result(err, null);
                } else {
                  listing[0].imgUrl = [];
                  res.forEach(imgUrl => {
                    if (imgUrl.listingId == listing[0].id) {
                      listing[0].imgUrl.push(imgUrl.imgUrl);
                    }
                  });
                  console.log(listing);
                  result(null, listing);
                }
                mysqlConn.release();
              }
            );
          }
        }
      );
    })
    .catch(err => {
      result(err, null);
    });
};

Listing.getByProviderId = function(id, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("Select * from listing where providerId =" + id, function(
        err,
        res
      ) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          mysqlConn.release();
        } else {
          let listings = res;
          mysqlConn.query(
            "SELECT * FROM listing_imgurl_mapping WHERE listingId IN (SELECT id FROM listing);",
            function(err, res) {
              if (err) {
                console.log("error: ", err);
                result(err, null);
              } else {
                listings.forEach(listing => {
                  listing.imgUrl = [];
                  res.forEach(imgUrl => {
                    if (imgUrl.listingId == listing.id) {
                      listing.imgUrl.push(imgUrl.imgUrl);
                    }
                  });
                });
                console.log("Users : ", res);
                result(null, listings);
              }
              mysqlConn.release();
            }
          );
        }
      });
    })
    .catch(err => {
      result(err, null);
    });
};

Listing.updateUserById = function(listingId, listing, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query(
        "UPDATE listing SET name = ?,role = ?,description = ?,location = ?,price = ? WHERE id = ?",
        [
          listing.name,
          listing.description,
          listing.location,
          listing.price,
          listingId
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

Listing.remove = function(listingId, result) {
  db.createConnection()
    .then(mysqlConn => {
      mysqlConn.query("DELETE FROM listing WHERE id = " + listingId, function(
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

module.exports = Listing;
