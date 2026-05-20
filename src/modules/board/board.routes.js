import { Router } from "express";
import authMiddleware from "../auth/auth.middleware.js";
import * as controller from "./board.controller.js";

const router = Router();

router.post("/create-board", authMiddleware, controller.createBoard);

export default router;