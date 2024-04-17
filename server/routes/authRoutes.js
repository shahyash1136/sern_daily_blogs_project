import { Router } from "express";
import { signup } from "../controllers/authController.js";
const router = Router();

router.post("/register", signup);

export default router;
