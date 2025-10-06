import express from "express";
import { getUserArticles } from "../controllers/articleController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getUserArticles);

export default router;
