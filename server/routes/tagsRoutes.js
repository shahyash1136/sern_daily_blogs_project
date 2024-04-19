import { Router } from "express";
import { getAllTags } from "../controllers/tagsController.js";
const routes = Router();

routes.get("/", getAllTags);

export default routes;
