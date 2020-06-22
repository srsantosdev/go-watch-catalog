import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("movie_lists", (table) => {
    table.increments("id").primary();
    table.integer("list_id").notNullable().references("id").inTable("lists");
    table.integer("movie_id").notNullable().references("id").inTable("movies");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("movie_lists");
}
