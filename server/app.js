import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
dotenv.config({ path: "./config.env" });

const app = express();

//Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
//Auth routes
app.use("/api/v1/auth", authRouter);

export { app };
