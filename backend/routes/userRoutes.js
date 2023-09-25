import express from "express";
import {
  getAllUsers,
  deleteUser,
  getUser,
  updateUser,
} from "../controller/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(authMiddleware, getAllUsers);
router
  .route("/:id")
  .get(authMiddleware, getUser)
  .patch(authMiddleware, updateUser)
  .delete(authMiddleware, deleteUser);

export default router;
