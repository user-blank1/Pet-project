import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";
import { PORT } from "./config/index";
import router from "./expenses/expenses.controller"; //  connection to sql

import "./db/db.service";
import logger from "./helpers/Logger";
const app = express();

app.use(cors());
app.use(express.json());

// connection to sql
app.use("/api/expenses", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "pong" });
});
app.use((req: Request, res: Response) => {
  logger.error("404 not found");
});
export const start = () => {
  console.log("Starting server...");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}: http://localhost:${PORT}`);
  });
};
