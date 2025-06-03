import express from "express";
import { login, logout, register } from "../controllers/authController.js";
import { userProtect } from "../middleware/userMiddleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/logout", userProtect, logout);

export default router;
