import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { Resend } from "resend";
import { AppError } from "../middleware/errorHandler";

const prisma = new PrismaClient();

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
});

export async function submitContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Validate input
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      return next(new AppError(parsed.error.errors[0].message, 400));
    }

    const { name, email, subject, message } = parsed.data;

    // Save to database
    const contact = await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });

    // Send email via Resend
    if (process.env.RESEND_API_KEY && process.env.CONTACT_RECEIVER) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { error } = await resend.emails.send({
          from: process.env.RESEND_FROM || "Portfolio <onboarding@resend.dev>",
          to: process.env.CONTACT_RECEIVER,
          replyTo: email,
          subject: `[Portfolio] ${subject}`,
          html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr />
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        });

        if (error) {
          console.error("❌ RESEND ERROR:", error);
          return next(
            new AppError(
              "Failed to send message. Please try again later or contact me directly via email.",
              502
            )
          );
        }
      } catch (emailErr) {
        console.error("❌ EMAIL FAILED:", emailErr);
        return next(
          new AppError(
            "Failed to send message. Please try again later or contact me directly via email.",
            502
          )
        );
      }
    }

    res.status(201).json({
      success: true,
      message: "Message received. I'll get back to you within 24 hours.",
      data: { id: contact.id },
    });
  } catch (err) {
    next(err);
  }
}
