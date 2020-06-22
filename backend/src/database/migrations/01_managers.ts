import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("managers", (table) => {
    table.string("id").primary().unique();
    table.string("profile_image");
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("managers");
}
