import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
} from "../controllers/blogController.js";
import { authMiddleware } from "../utils/authMiddleware.js";

const router = express.Router();

router.route("/").get(getAllBlogs).post(authMiddleware, createBlog);
router
  .route("/:id")
  .get(getBlog)
  .delete(authMiddleware, deleteBlog)
  .patch(authMiddleware, updateBlog);

export default router;
