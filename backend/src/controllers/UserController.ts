import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import connection from "./../database/connection";

class UserController {
  static async index(request: Request, response: Response) {
    try {
      const users = await connection("users").select("*");
      return response.json(users).status(200);
    } catch (err) {
      console.log(err);
      return response.status(400).send();
    }
  }

  static async create(request: Request, response: Response) {
    try {
      const { name, email, username, password } = request.body;

      const password_hash = await bcrypt.hash(password, 10);

      const user = {
        profile_image: "",
        name,
        email,
        username,
        password: password_hash,
      };

      const [createdUser] = await connection("users")
        .insert(user)
        .returning("*");

      return response.json(createdUser).status(201);
    } catch (err) {
      console.log(err);
      return response.status(400).send();
    }
  }

  static async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const user = await connection("users").where("id", id).first();

      if (!user) {
        return response.status(404).json({ message: "User not found!" });
      }

      return response.status(200).json(user);
    } catch (err) {
      console.log(err);
      return response.status(400).send();
    }
  }

  static async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const updatedUser = request.body;

      const [user] = await connection("users")
        .where("id", id)
        .first()
        .update(updatedUser)
        .returning("*");

      if (!user) {
        return response.status(404).json({ message: "User not found!" });
      }

      return response.status(201).json(user);
    } catch (err) {
      console.log(err);
      return response.status(400).send();
    }
  }

  static async destroy(request: Request, response: Response) {
    try {
      const { id } = request.params;

      await connection("users").where("id", id).delete();

      return response.status(204).send();
    } catch (err) {
      console.log(err);
      return response.status(400).send();
    }
  }
}

export default UserController;
