import { Router } from "express";
import { getAllJobs, getAllEducation } from "../controllers/resumeController";

const router = Router();

// GET /api/resume/jobs
router.get("/jobs", getAllJobs);

// GET /api/resume/education
router.get("/education", getAllEducation);

export default router;
