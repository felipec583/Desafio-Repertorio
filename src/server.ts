import express from "express";
import cors from "cors";
import viewsRoutes from "./routes/viewsRoutes.js";
import songRoutes from "./routes/songRoutes.js";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`Method ${req.method}`);
  next();
});
app.use("/", viewsRoutes);
app.use("/api/v1", songRoutes);

app.listen(PORT, () => {
  console.log(`Listening on PORT${PORT}`);
});
