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
    "booking",
    {
      id: {
        type: "int",
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
        length: 6
      },
      userId: {
        type: "int",
        notNull: true,
        length: 6,
        foreignKey: {
          name: "booking_user_id_fk",
          table: "user",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: {
            userId: "id"
          }
        }
      },
      listingId: {
        type: "int",
        notNull: true,
        length: 6,
        foreignKey: {
          name: "booking_listing_id_fk",
          table: "listing",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: {
            listingId: "id"
          }
        }
      },
      dateFrom: {
        type: "string",
        length: 120,
        notNull: true
      },
      dateTo: {
        type: "string",
        length: 120,
        notNull: true
      },
      status: {
        type: "string",
        length: 100,
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
  db.dropTable("booking", [], done);
};

exports._meta = {
  version: 1
};
