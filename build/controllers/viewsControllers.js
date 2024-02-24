import path from "path";
const getIndex = async (_req, res) => {
    res.sendFile(path.resolve("index.html"));
};
export { getIndex };
