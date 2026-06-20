import { Router } from "express";
import { submitContact } from "../controllers/contactController";
import rateLimit from "express-rate-limit";

// Max 5 contact form submissions per IP per 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    error: "Too many messages sent. Please wait 15 minutes before trying again.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const router = Router();

// POST /api/contact
router.post("/", contactLimiter, submitContact);

export default router;
