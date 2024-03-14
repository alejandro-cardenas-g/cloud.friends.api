import { Router } from "express";
import { getFriend, createFriend } from "./controller.js";

const router = Router();

router.get("/", getFriend);
router.post("/", createFriend);
router.get("/search", getFriend);

export default router;
