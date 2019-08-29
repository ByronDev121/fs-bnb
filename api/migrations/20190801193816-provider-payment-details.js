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
    "provider_payment_details",
    {
      id: {
        type: "int",
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
        length: 6
      },
      providerId: {
        type: "int",
        notNull: true,
        length: 6,
        foreignKey: {
          name: "payment_provider_id_fk",
          table: "user",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: {
            providerId: "id"
          }
        }
      },
      bankNAme: {
        type: "string",
        length: 255,
        notNull: true
      },
      accountNumber: {
        type: "string",
        length: 255,
        notNull: true
      },
      accountHoldersName: {
        type: "string",
        length: 255,
        notNull: true
      }
    },
    done
  );
};

exports.down = function(db, done) {
  db.dropTable("provider_payment_details", [], done);
};

exports._meta = {
  version: 1
};
