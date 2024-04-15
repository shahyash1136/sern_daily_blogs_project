import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const app = express();

//Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

export { app };
