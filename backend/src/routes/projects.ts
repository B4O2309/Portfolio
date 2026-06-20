import { Router } from "express";
import {
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
} from "../controllers/projectsController";

const router = Router();

// GET /api/projects
router.get("/", getAllProjects);

// GET /api/projects/featured
router.get("/featured", getFeaturedProjects);

// GET /api/projects/:slug
router.get("/:slug", getProjectBySlug);

export default router;
