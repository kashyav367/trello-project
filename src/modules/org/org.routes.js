import { Router } from "express"
import  authMiddleware from "../auth/auth.middleware.js";
import * as controller from "./org.controller.js"

const router = Router()


router.post("/create-organisation", authMiddleware , controller.createOrganisation);
router.post("/add-member" , authMiddleware , controller.addMember);
router.delete("/delete-member" , authMiddleware , controller.deleteMember);

export default router