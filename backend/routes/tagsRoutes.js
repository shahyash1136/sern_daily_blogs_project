import express from "express";
import { getAllTags } from "../controller/tagsController.js";

const router = express.Router();

router.route("/").get(getAllTags);

export default router;
