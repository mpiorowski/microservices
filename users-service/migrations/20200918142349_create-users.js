exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.uuid("id").primary();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    table.timestamp("updatedAt");
    table.timestamp("deletedAt");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
