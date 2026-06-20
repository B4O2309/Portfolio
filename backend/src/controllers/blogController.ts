import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { AppError } from "../middleware/errorHandler";

const prisma = new PrismaClient();

export async function getAllPosts(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { date: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        summary: true,
        tags: true,
        author: true,
        date: true,
        // exclude content for list view — save bandwidth
      },
    });
    res.json({ success: true, data: posts });
  } catch (err) {
    next(err);
  }
}

export async function getPostBySlug(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug: req.params.slug, published: true },
    });
    if (!post) {
      return next(new AppError("Post not found", 404));
    }
    res.json({ success: true, data: post });
  } catch (err) {
    next(err);
  }
}
