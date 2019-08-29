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
    "chat",
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
          name: "chat_user_id_fk",
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
      providerUserId: {
        type: "int",
        notNull: true,
        length: 6,
        foreignKey: {
          name: "chat_provider_user_id_fk",
          table: "user",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: {
            providerUserId: "id"
          }
        }
      },
      userImgUrl: {
        type: "string",
        length: 255,
        notNull: true
      },
      providerImgUrl: {
        type: "string",
        length: 255,
        notNull: true
      },
      providerUserName: {
        type: "string",
        length: 100,
        notNull: true
      },
      providerUserName: {
        type: "string",
        length: 100,
        notNull: true
      }
    },
    done
  );
};

exports.down = function(db, done) {
  db.dropTable("chat", [], done);
};

exports._meta = {
  version: 1
};
