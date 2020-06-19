import dotEnv from "dotenv";
import express from "express";
import cors from "cors";

const app = express();

dotEnv.config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

export default app;
