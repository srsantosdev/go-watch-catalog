import { Request, Response } from "express";
import connection from "./../database/connection";

export default class MovieController {
  static async index(request: Request, response: Response) {
    try {
      const movies = await connection("movies").select("*");
      return response.json(movies).status(200);
    } catch (err) {
      return response.status(400).send();
    }
  }

  static async create(request: Request, response: Response) {
    try {
      const { title, year, synopsis, duration, director, type } = request.body;
      const stars = 0;

      const movie = {
        image_url: "",
        title,
        year,
        synopsis,
        duration,
        director,
        type,
        stars,
      };

      const [createdMovie] = await connection("movies")
        .insert(movie)
        .returning("*");

      return response.json(createdMovie).status(201);
    } catch (err) {
      return response.status(400).send();
    }
  }

  static async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const movie = await connection("movies").where("id", id).first();

      if (!movie) {
        return response.status(404).json({ message: "Movie not found!" });
      }

      return response.status(200).json(movie);
    } catch (err) {
      return response.status(400).send();
    }
  }

  static async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const updatedMovie = request.body;

      const [movie] = await connection("movies")
        .where("id", id)
        .first()
        .update(updatedMovie)
        .returning("*");

      if (!movie) {
        return response.status(404).json({ message: "Movie not found!" });
      }

      return response.status(201).json(movie);
    } catch (err) {
      return response.status(400).send();
    }
  }

  static async destroy(request: Request, response: Response) {
    try {
      const { id } = request.params;

      await connection("movies").where("id", id).delete();

      return response.status(204).send();
    } catch (err) {
      return response.status(400).send();
    }
  }
}
