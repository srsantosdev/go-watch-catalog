import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import connection from "./../database/connection";

class SessionController {
  static async create(request: Request, response: Response) {
    try {
      const { username, password } = request.body;

      const [user] = await connection("users")
        .where("username", username)
        .select(["id", "username", "password"]);

      if (!user) {
        return response.status(404).json({ message: "User not found!" });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        throw new Error();
      }

      const token = jwt.sign(
        {
          id: user.id,
        },
        String(process.env.SECRET_KEY),
        { expiresIn: 86400 }
      );

      return response.json({ id: user.id, username, token }).status(200);
    } catch (err) {
      return response.status(404).send();
    }
  }

  static async authManager(request: Request, response: Response) {
    try {
      const { id, password } = request.body;

      const [manager] = await connection("managers")
        .where("id", id)
        .select(["id", "password"]);

      if (!manager) {
        return response.status(404).json({ message: "Manager not found!" });
      }

      if (!(await bcrypt.compare(password, manager.password))) {
        throw new Error();
      }

      const token = jwt.sign(
        {
          id: manager.id,
        },
        String(process.env.SECRET_KEY),
        { expiresIn: 86400 }
      );

      return response.json({ id: manager.id, token }).status(200);
    } catch (err) {
      return response.status(404).send();
    }
  }
}

export default SessionController;
