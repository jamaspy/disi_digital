// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
import { toast } from "react-toastify";
export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: `${req.body.email}`,
    to: `${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`,
    subject: `Website Enquiry Message from: ${req.body.name}`,
    text: req.body.message + " | Reply via: " + req.body.email,
    html: `<p><strong>Here is your message from:</strong> ${req.body.name}</p><div>${req.body.message}</div><p>Reply via:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      return res
        .status(500)
        .json({ status: "Email Failed", data: req.body, err });
    } else return res.status(200).json({ status: "Email Sent", data: req.body, info });
  });
}
