const { NextApiRequest, NextApiResponse } = require("next");
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const msg = {
      to: "webdesigner@indocosmo.com",
      from: "webdesigner@indocosmo.com",
      subject: `${name.toUpperCase()} sent you a message`,
      text: `Email => ${email}`,
      html: `<strong>${message}</strong>`,
    };
    try {
      await sendgrid.send(msg);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false });
    }
  }
};
