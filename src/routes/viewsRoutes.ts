import { Router } from "express";
import { getIndex } from "../controllers/viewsControllers";

const router = Router();

router.get("/", getIndex);

export default router;
