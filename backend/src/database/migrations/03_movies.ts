import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.integer("year").notNullable();
    table.text("synopsis").notNullable();
    table.time("duration").notNullable();
    table.string("director").notNullable();
    table.integer("stars").notNullable();
    table.enu("type", ["movie", "serie"]).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("movies");
}
