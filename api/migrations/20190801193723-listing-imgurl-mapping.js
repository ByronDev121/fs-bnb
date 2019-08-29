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
    "listing_imgurl_mapping",
    {
      id: {
        type: "int",
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
        length: 6
      },
      listingId: {
        type: "int",
        notNull: true,
        length: 6,
        foreignKey: {
          name: "img_listing_id_fk",
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
      imgUrl: {
        type: "string",
        length: 255,
        notNull: true
      }
    },
    done
  );
};

exports.down = function(db, done) {
  db.dropTable("listing_imgurl_mapping", [], done);
};

exports._meta = {
  version: 1
};
