"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, done) {
  db.createTable(
    "user",
    {
      id: {
        type: "int",
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
        length: 6
      },
      firstName: {
        type: "string",
        length: 100,
        notNull: true
      },
      lastName: {
        type: "string",
        length: 100,
        notNull: true
      },
      email: {
        type: "string",
        length: 255,
        notNull: true,
        uniqueIndex: true
      },
      cellPhone: {
        type: "string",
        length: 100,
        notNull: true
      },
      password: {
        type: "string",
        length: 255,
        notNull: true
      },
      imgUrl: {
        type: "string",
        length: 255,
        notNull: true
      },
      role: {
        type: "string",
        length: 45,
        notNull: true
      },
      dateCreated: {
        type: "date",
        notNull: true
      }
    },
    done
  );
};

exports.down = function(db, done) {
  db.dropTable("user", [], done);
};

exports._meta = {
  version: 1
};
