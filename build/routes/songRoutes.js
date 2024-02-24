import { Router } from "express";
import { addNewSong, deleteSong, editSong, getSongs, } from "../controllers/songControllers.js";
const router = Router();
router.get("/canciones", getSongs);
router.post("/canciones", addNewSong);
router.delete("/canciones/:id", deleteSong);
router.put("/canciones/:id", editSong);
export default router;
