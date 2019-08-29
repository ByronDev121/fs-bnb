// Models:
var Listing = require("../models/listing-model");
var ListingImgMapping = require("../models/listing-imgurl-mapping-model");

module.exports = class ListingService {
  constructor() {}

  get() {
    return new Promise((resolve, reject) => {
      Listing.getAll((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      Listing.getById(id, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res[0]);
      });
    });
  }

  getByProviderId(id) {
    return new Promise((resolve, reject) => {
      Listing.getByProviderId(id, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res[0]);
      });
    });
  }

  create(listing) {
    return new Promise((resolve, reject) => {
      const newListing = new Listing(listing);
      Listing.create(newListing, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  updateUser(listing) {
    return new Promise((resolve, reject) => {
      Listing.updateById(listing.id, listing, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  setImageUrl(listinId, url) {
    return new Promise((resolve, reject) => {
      const imgMapping = new ListingImgMapping({
        listingId: listinId,
        imgUrl: url
      });
      ListingImgMapping.create(imgMapping, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  removeByID(id) {
    return new Promise((resolve, reject) => {
      Listing.remove(id, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }
};
