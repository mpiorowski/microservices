exports.up = function (knex) {
  return knex.schema.createTable("listings", function (table) {
    table.increments();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    table.timestamp("updatedAt");
    table.timestamp("deletedAt");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("listings");
};
