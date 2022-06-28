const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.postmarkapp.com",
  port: 587,
  auth: {
    user: "0650ada8-765f-4f84-b152-2b7123b4a6ff",
    pass: "0650ada8-765f-4f84-b152-2b7123b4a6ff",
  },
});
const mailOptions = {
  from: "brandont@missionreadyhq.com",
  to: "sebin@missionreadyhq.com",
  subject: "Test",
  text: "This is a test",
};
transporter.sendMail(mailOptions);
