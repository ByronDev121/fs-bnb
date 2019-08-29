// Models:
var Booking = require("../models/booking-model");
var Listing = require("../models/listing-model");

module.exports = class BookingService {
  constructor() {}

  get() {
    return new Promise((resolve, reject) => {
      Booking.getAll((err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      Booking.getById(id, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res[0]);
      });
    });
  }

  getByUserId(id) {
    return new Promise((resolve, reject) => {
      Booking.getByUserId(id, (err, res) => {
        if (err) {
          reject(err);
        } else {
          let bookings = res;
          let bookingRes = [];
          Listing.getAll((err, res) => {
            if (err) {
              reject(err);
            } else {
              bookings.forEach(async booking => {
                res.forEach(listing => {
                  if (booking.listingId === listing.id) {
                    booking.listing = listing;
                    bookingRes.push(booking);
                  }
                });
              });
              resolve(bookingRes);
            }
          });
        }
      });
    });
  }

  getByListingId(id) {
    return new Promise((resolve, reject) => {
      Booking.getByListingId(id, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  create(booking) {
    return new Promise((resolve, reject) => {
      let dBbooking = new Booking(booking);
      Booking.create(dBbooking, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  update(booking) {
    return new Promise((resolve, reject) => {
      Booking.updateById(booking.id, booking, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  removeByID(id) {
    return new Promise((resolve, reject) => {
      Booking.remove(id, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }
};
