import { Router } from "express";
import { addTag, getAllTags } from "../controllers/tagsController.js";
const routes = Router();

routes.get("/", getAllTags).post("/", addTag);

export default routes;
