exports.up = function (knex) {
  return knex.schema.createTable("usersSessions", function (table) {
    table.uuid("id");
    table.uuid("userId").notNullable().references('id').inTable('users');;
    table.timestamp("expiresAt").notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {};
