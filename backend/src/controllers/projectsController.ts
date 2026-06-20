import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { AppError } from "../middleware/errorHandler";

const prisma = new PrismaClient();

export async function getAllProjects(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { order: "asc" },
    });
    res.json({ success: true, data: projects });
  } catch (err) {
    next(err);
  }
}

export async function getFeaturedProjects(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const projects = await prisma.project.findMany({
      where: { featured: true },
      orderBy: { order: "asc" },
      take: 3,
    });
    res.json({ success: true, data: projects });
  } catch (err) {
    next(err);
  }
}

export async function getProjectBySlug(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const project = await prisma.project.findUnique({
      where: { slug: req.params.slug },
    });
    if (!project) {
      return next(new AppError("Project not found", 404));
    }
    res.json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
}
