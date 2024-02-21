import fsp from "fs/promises";
import { SongInfo } from "./controllers/songController";
import { Response } from "express";

async function getData() {
  try {
    const file = await fsp.readFile("repertorio.json", "utf-8");
    let data;
    if (file === undefined || file === "") {
      let data: [] = [];
      return data;
    } else {
      data = JSON.parse(file);
      return data;
    }
  } catch (error) {
    console.log("Something is wrong", error);
  }
}
// Validación del input cuando el cliente agrega o edita una canción
function checkInput(song: SongInfo, res: Response): boolean {
  try {
    const { titulo, artista, tono } = song;
    if (!titulo || !artista || !tono) {
      res.status(400).json({ Error: "Los campos no pueden estar vacíos" });
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export { getData, checkInput };
