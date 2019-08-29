"use strict";
const mysql = require("mysql");

module.exports = class DB {
  static instance() {
    return this._instance || (this._instance = new this());
  }

  constructor() {
    this.localConfig = {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "fs_bnb"
    };

    this.prodConfig = {
      host: "eu-cdbr-west-02.cleardb.net",
      port: 3306,
      user: "b5dda02f0010b4",
      password: "c0e3b1d0",
      database: "heroku_b1ad8bc9e154404",
      timezone: "+0200",
      connectionLimit: 10,
      connectTimeout: 10000,
      waitForConnections: true,
      queueLimit: 0
    };

    this.pool = mysql.createPool(this.prodConfig);
    console.log("MySQL pool instance created");
  }

  createConnection() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, poolConnection) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(
            "New Database Connected: " +
              this.localConfig.host +
              ":" +
              this.localConfig.port
          );
          resolve(poolConnection);
        }
      });
    });
  }
};
