import express from "express";
import { get, post } from "./handlers";
import { getByHash, updateByHash, deleteByHash } from "./hash";

//Utils
//?ограничитель запросов и парметр времени сброса
import { limiter, validator } from "../../utils";

//Schema for validation
import { createUser } from "../../schemas";
export const router = express.Router();

router.get("/", [limiter(10, 1000 * 60)], get);
router.post("/", [validator(createUser)], post);

router.get("/userHash ", getByHash);
router.put("/userHash ", updateByHash);
router.delete("/userHash ", deleteByHash);

export { router as users };
