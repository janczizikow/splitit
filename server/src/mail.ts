import * as nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  // @ts-ignore
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
});
