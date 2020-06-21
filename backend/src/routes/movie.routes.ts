import { Router } from "express";
import MovieController from "./../controllers/MovieController";

const routes = Router();

routes.get("/movies", MovieController.index);
routes.post("/movies", MovieController.create);
routes.put("/movies/:id", MovieController.update);
routes.get("/movies/:id", MovieController.show);
routes.delete("/movies/:id", MovieController.destroy);

export default routes;
