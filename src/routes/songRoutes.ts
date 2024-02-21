import express from "express";
import {
  addNewSong,
  deleteSong,
  editSong,
  getSongs,
} from "../controllers/songController.js";
const router = express.Router();

router.get("/", getSongs);
router.post("/", addNewSong);
router.delete("/:id", deleteSong);
router.put("/:id", editSong);
export default router;
