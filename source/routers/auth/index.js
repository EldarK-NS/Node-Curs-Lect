import express from "express";
import { login, logout } from "./handlers";
import { limiter, authenticate } from "../../utils";

export const router = express.Router();

router.post("/login", [limiter(5, 60 * 1000)], login);
router.post("/logout", [authenticate, limiter(5, 60 * 1000)], logout);

export { router as auth };
