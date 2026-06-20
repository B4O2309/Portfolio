import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import projectsRouter from "./routes/projects";
import blogRouter from "./routes/blog";
import resumeRouter from "./routes/resume";
import contactRouter from "./routes/contact";
import { errorHandler, notFound } from "./middleware/errorHandler";

const app = express();
const PORT = process.env.PORT || 4000;

app.set("trust proxy", 1);

// ── Security headers ──────────────────────────────────────
app.use(helmet());

// ── CORS ──────────────────────────────────────────────────
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ── Body parsing ──────────────────────────────────────────
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// ── Health check ──────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    status: "ok",
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV,
  });
});

// ── API Routes ────────────────────────────────────────────
app.use("/api/projects", projectsRouter);
app.use("/api/blog", blogRouter);
app.use("/api/resume", resumeRouter);
app.use("/api/contact", contactRouter);

// ── 404 + Error handler ───────────────────────────────────
app.use(notFound);
app.use(errorHandler);

// ── Start server ──────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Backend running on http://localhost:${PORT}`);
  console.log(`   Environment : ${process.env.NODE_ENV || "development"}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health\n`);
});

export default app;
