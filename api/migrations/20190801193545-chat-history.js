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
    "chat_history",
    {
      id: {
        type: "int",
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
        length: 6
      },
      chatId: {
        type: "int",
        notNull: true,
        length: 6,
        foreignKey: {
          name: "chat_message_id_fk",
          table: "chat",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: {
            chatId: "id"
          }
        }
      },
      text: {
        type: "string",
        length: 255,
        notNull: true
      },
      dateTimeCreate: {
        type: "date",
        notNull: true
      }
    },
    done
  );
};

exports.down = function(db, done) {
  db.dropTable("chat_history", [], done);
};

exports._meta = {
  version: 1
};
