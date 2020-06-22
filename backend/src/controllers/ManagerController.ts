import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import generateUniqueID from "./../utils/generateUniqueID";
import connection from "./../database/connection";

class ManagerController {
  static async index(request: Request, response: Response) {
    try {
      const managers = await connection("managers").select("*");
      return response.json(managers).status(200);
    } catch (err) {
      console.log(err);
      return response.status(400).send();
    }
  }

  static async create(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;

      const password_hash = await bcrypt.hash(password, 10);
      const id = generateUniqueID();

      const manager = {
        id,
        profile_image: "",
        name,
        email,
        password: password_hash,
      };

      const [createdManager] = await connection("managers")
        .insert(manager)
        .returning("*");

      return response.json(createdManager).status(201);
    } catch (err) {
      console.log(err);
      return response.status(400).send();
    }
  }

  static async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const manager = await connection("managers").where("id", id).first();

      if (!manager) {
        return response.status(404).json({ message: "Manager not found!" });
      }

      return response.status(200).json(manager);
    } catch (err) {
      console.log(err);
      return response.status(400).send();
    }
  }

  static async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, email, password } = request.body;

      let password_hash = undefined;

      if (password) {
        password_hash = await bcrypt.hash(password, 10);
      }

      const [manager] = await connection("managers")
        .where("id", id)
        .first()
        .update({ name, email, password: password_hash })
        .returning("*");

      if (!manager) {
        return response.status(404).json({ message: "Manager not found!" });
      }

      return response.status(201).json(manager);
    } catch (err) {
      console.log(err);
      return response.status(400).send();
    }
  }

  static async destroy(request: Request, response: Response) {
    try {
      const { id } = request.params;

      await connection("managers").where("id", id).delete();

      return response.status(204).send();
    } catch (err) {
      console.log(err);
      return response.status(400).send();
    }
  }
}

export default ManagerController;
