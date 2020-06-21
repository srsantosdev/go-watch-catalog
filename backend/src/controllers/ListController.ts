import { Request, Response } from "express";
import connection from "./../database/connection";

export default class ListController {
  static async index(request: Request, response: Response) {
    try {
      const lists = await connection("lists").select("*");
      return response.json(lists).status(200);
    } catch (error) {
      return response.status(400).send();
    }
  }

  static async create(request: Request, response: Response) {
    try {
      const { user_id, title } = request.body;

      const list = {
        title,
        user_id,
      };

      const [createdList] = await connection("lists")
        .insert(list)
        .returning("*");

      return response.status(201).json(createdList);
    } catch (error) {
      return response.status(400).send();
    }
  }

  static async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const list = await connection("lists").where("id", id).first();

      if (!list) {
        return response.status(404).json({ message: "List not found!" });
      }

      return response.status(200).json(list);
    } catch (error) {
      return response.status(400).send();
    }
  }

  static async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const updatedList = request.body;

      const [list] = await connection("lists")
        .where("id", id)
        .first()
        .update(updatedList)
        .returning("*");

      if (!list) {
        return response.status(404).json({ message: "List not found!" });
      }

      return response.status(201).json(list);
    } catch (error) {
      return response.status(400).send();
    }
  }

  static async destroy(request: Request, response: Response) {
    try {
      const { id } = request.params;

      await connection("lists").where("id", id).delete();

      return response.status(204).send();
    } catch (error) {
      return response.status(400).send();
    }
  }
}
