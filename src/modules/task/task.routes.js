import { Router } from "express"
import authMiddleware from "../auth/auth.middleware.js"
import * as controller from "./task.controller.js"


const router = Router()

router.post("/create-task" , authMiddleware, controller.createTask)
router.put("/update-task" , authMiddleware , controller.updateTask)
router.delete("/delete-task" , authMiddleware , controller.deleteTask)

export default router;

