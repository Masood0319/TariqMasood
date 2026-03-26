import fs from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";

const dataPath = path.resolve("data", "messages.json");

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export const handleContact = async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  const entry = {
    id: Date.now(),
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  };

  try {
    const existing = await fs
      .readFile(dataPath, "utf-8")
      .then((data) => JSON.parse(data))
      .catch(() => []);

    await fs.writeFile(
      dataPath,
      JSON.stringify([entry, ...existing], null, 2)
    );

    console.log("New contact message:", entry);

    const transporter = getTransporter();
    if (transporter) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      });
    }

    return res.json({ success: true });
  } catch (error) {
    console.error("Contact submission error:", error);
    return res.status(500).json({ message: "Server error." });
  }
};
