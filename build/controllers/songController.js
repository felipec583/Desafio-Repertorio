import { getData, checkInput } from "../utils.js";
import fsp from "fs/promises";
const getSongs = async (_req, res) => {
    try {
        const data = await getData();
        if (!data) {
            console.log("This data does not exist in our DB");
            return;
        }
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
    }
};
const addNewSong = async (req, res, _next) => {
    try {
        const data = await getData();
        const newData = req.body;
        if (!data) {
            console.log("This data does nox exist in our DB");
            return;
        }
        if (!checkInput(newData, res))
            return;
        data.push(newData);
        await fsp.writeFile("repertorio.json", JSON.stringify(data));
        res.status(201).send("New song added to the DB");
        console.log("New song");
    }
    catch (error) {
        console.log(error);
    }
};
const editSong = async (req, res, _next) => {
    try {
        const { id } = req.params;
        const song = req.body;
        const data = await getData();
        const getId = data.some((song) => song.id === +id);
        if (!checkInput(song, res))
            return;
        if (getId) {
            const newData = data.map((s) => {
                if (s.id === +id) {
                    return {
                        ...s,
                        titulo: song.titulo,
                        artista: song.artista,
                        tono: song.tono,
                    };
                }
                return song;
            });
            await fsp.writeFile("repertorio.json", JSON.stringify(newData));
            res.status(200).send("Updated Song");
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (error) {
        if (error instanceof Error)
            console.log(error.message);
    }
};
const deleteSong = async (req, res, _next) => {
    try {
        const { id } = req.params;
        const data = await getData();
        const getId = data.some((song) => song.id === +id);
        if (getId) {
            const filteredData = data.filter((song) => song.id !== +id);
            await fsp.writeFile("repertorio.json", JSON.stringify(filteredData));
            res.status(204).send(`Song with id:${id} has been deleted`);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (error) {
        console.log(error);
    }
};
export { getSongs, addNewSong, deleteSong, editSong };
