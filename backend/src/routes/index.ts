import { Router } from "express";

import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import movieRoutes from "./movie.routes";
import listRoutes from "./list.routes";

const routes = Router();

routes.use(authRoutes);
routes.use(userRoutes);
routes.use(movieRoutes);
routes.use(listRoutes);

export default routes;
