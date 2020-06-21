import { config } from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

config();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

export default app;
