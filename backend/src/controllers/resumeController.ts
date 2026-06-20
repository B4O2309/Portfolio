import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllJobs(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { order: "asc" },
    });
    res.json({ success: true, data: jobs });
  } catch (err) {
    next(err);
  }
}

export async function getAllEducation(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const education = await prisma.education.findMany({
      orderBy: { order: "asc" },
    });
    res.json({ success: true, data: education });
  } catch (err) {
    next(err);
  }
}
