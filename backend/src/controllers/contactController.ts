import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import nodemailer from "nodemailer";
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

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function submitContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Validate input
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      return next(
        new AppError(parsed.error.errors[0].message, 400)
      );
    }

    const { name, email, subject, message } = parsed.data;

    // Save to database
    const contact = await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });

    // Send email notification if SMTP is configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = createTransporter();
        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_RECEIVER,
          replyTo: email,
          subject: `[Portfolio] ${subject}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr />
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        });
      } catch (emailErr) {
        // Non-fatal — message is already saved to DB
        console.error("Email send failed (message saved to DB):", emailErr);
      }
    }

    res.status(201).json({
      success: true,
      message: "Message received. I'll get back to you within 24–48 hours.",
      data: { id: contact.id },
    });
  } catch (err) {
    next(err);
  }
}
