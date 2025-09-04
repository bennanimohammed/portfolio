// src/pages/api/contact.ts (Pages Router)
// or app/api/contact/route.ts (App Router -> export async function POST)

import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `[Portfolio Contact] ${subject}`,
      text: `
        You received a new message from your portfolio:
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    })

    return res.status(200).json({ message: "Email sent successfully" })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Error sending email" })
  }
}