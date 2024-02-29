const nodemailer = require("nodemailer");

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "hadaroadams1234@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  let info = transport.sendMail(
    {
      from: `'Hadaro Adams' <hadaroadams1234@gmail.com>`,
      to: "adamshadaro1234@gmail.com",
      subject: "hello",
      html: "<h2>Sending Email with node.js</h2> ",
      text: "this is just a test drivev",
    },
    (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent:", info.response);
      }
    }
  );
  res.json(info);
};

module.exports = { sendEmailEthereal };
