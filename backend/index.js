import express from "express";
import bodyParser from "body-parser";
import dotEnv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import tagsRoutes from "./routes/tagsRoutes.js";

dotEnv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/blog", blogRoutes);
app.use("/api/v1/tags", tagsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${process.env.BASE_URL}${PORT}`);
});
