import express from "express";
import cors from "cors";
import songRoutes from "./routes/songRoutes.js";
const app = express();
import path from "path";
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(`Method ${req.method}`);
    next();
});
app.use("/canciones", songRoutes);
app.get("/", async (req, res) => {
    res.status(200).sendFile(path.resolve("index.html"));
});
app.listen(PORT, () => {
    console.log(`Listening on PORT${PORT}`);
});
