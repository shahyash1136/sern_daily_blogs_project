import { Router } from "express";
import { authMiddleware } from "../utils/authMiddleware.js";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
const router = Router();

router.route("/").get(authMiddleware, getAllUser);

router
  .route("/:id")
  .get(authMiddleware, getUser)
  .patch(authMiddleware, updateUser)
  .delete(authMiddleware, deleteUser);

export default router;
