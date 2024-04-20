import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import tagsRoutes from "./routes/tagsRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config({ path: "./config.env" });

const app = express();

//Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//Auth api
app.use("/api/v1/auth", authRoutes);

//User Api
app.use("/api/v1/user", userRoutes);

//Tags Api
app.use("/api/v1/tags", tagsRoutes);

//Blogs Api
app.use("/api/v1/blog", blogRoutes);

export { app };
