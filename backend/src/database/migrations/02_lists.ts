import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("lists", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("user_id").notNullable().references("id").inTable("users");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("lists");
}
