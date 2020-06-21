import { Router } from "express";

import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import movieRoutes from "./movie.routes";

const routes = Router();

routes.use(authRoutes);
routes.use(userRoutes);

routes.use(movieRoutes);

export default routes;
