import { Router } from "express";
import { getFriend, createFriend } from "./controller.js";

const router = Router();

router.get("/", getFriend);
router.post("/", createFriend);
router.get("/search", getFriend);
router.get("/health-check", (_, res) => {
  return res.status(200).json({
    status: 200,
  });
});

export default router;
