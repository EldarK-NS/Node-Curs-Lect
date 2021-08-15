import express from "express";
import { get, post } from "./handlers";
import { getByHash, updateByHash, deleteByHash } from "./hash";

export const router = express.Router();

router.get("/", get);
router.post("/", post);

router.get("/classHash", getByHash);
router.put("/classHash", updateByHash);
router.delete("/classHash", deleteByHash);

export { router as classes };
