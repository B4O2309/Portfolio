import { Router } from "express";
import { getAllPosts, getPostBySlug } from "../controllers/blogController";

const router = Router();

// GET /api/blog
router.get("/", getAllPosts);

// GET /api/blog/:slug
router.get("/:slug", getPostBySlug);

export default router;
