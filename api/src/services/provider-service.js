// Models:
var Provider = require("../models/provider-model");

module.exports = class ProviderService {
  constructor() {}

  get() {
    return new Promise((resolve, reject) => {
      Provider.getAll((err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      Provider.getById(id, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res[0]);
      });
    });
  }

  create(provider) {
    return new Promise((resolve, reject) => {
      Provider.create(provider, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  update(provider) {
    return new Promise((resolve, reject) => {
      Provider.updateById(provider.id, provider, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  removeByID(id) {
    return new Promise((resolve, reject) => {
      Provider.removeById(id, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }
};
