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
    "listing",
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
          name: "listing_provider_id_fk",
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
      name: {
        type: "string",
        length: 100,
        notNull: true
      },
      shortDescription: {
        type: "string",
        length: 255,
        notNull: true
      },
      longDescription: {
        type: "string",
        length: 1000,
        notNull: true
      },
      guests: {
        type: "int",
        length: 100,
        notNull: true
      },
      beds: {
        type: "int",
        length: 100,
        notNull: true
      },
      baths: {
        type: "int",
        length: 100,
        notNull: true
      },
      amenities: {
        type: "string",
        length: 255,
        notNull: true
      },
      location: {
        type: "string",
        length: 100,
        notNull: true
      },
      price: {
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
  db.dropTable("listing", [], done);
};

exports._meta = {
  version: 1
};
