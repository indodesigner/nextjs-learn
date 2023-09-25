// import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const msg = {
      to: "webdesigner@indocosmo.com",
      from: "indocsmailjs@gmail.com",
      subject: `${name.toUpperCase()} sent you a message`,
      text: `Email => ${email}`,
      html: `<strong>${message}</strong>`,
    };
    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false });
    }
  }
};
