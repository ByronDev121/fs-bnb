// Models:
var User = require("../models/user-model");

module.exports = class UserService {
  constructor() {}

  get() {
    return new Promise((resolve, reject) => {
      User.getAll((err, res) => {
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
      User.getById(id, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res[0]);
        }
      });
    });
  }

  create(user) {
    return new Promise((resolve, reject) => {
      User.create(user, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  update(user) {
    return new Promise((resolve, reject) => {
      User.updateById(user.id, user, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  setImageUrl(userId, url) {
    return new Promise((resolve, reject) => {
      User.updateImageById(userId, url, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  removeByID(id) {
    return new Promise((resolve, reject) => {
      User.remove(id, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
