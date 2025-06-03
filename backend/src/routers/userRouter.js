import express from "express";
import { userProtect } from "../middleware/userMiddleware.js";
import { getUserData } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile", userProtect, getUserData);

export default router;
