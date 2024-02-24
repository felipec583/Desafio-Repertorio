import { Response, Request } from "express";
import path from "path";

type ControllerCallBackParams = (req: Request, res: Response) => void;

const getIndex: ControllerCallBackParams = async (_req, res) => {
  res.sendFile(path.resolve("index.html"));
};

export { getIndex };
