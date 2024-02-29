require("dotenv").config();
require("express-async-errors");
const express = require("express");
const { sendEmailEthereal } = require("./controller/sendEmail");
const app = express();

const PORT = process.env.PORT || 4200;

app.get("/", (req, res) => {
  res.send('<h1>Email Project</h1> <a href="/send">send email</a>');
});

app.get("/send", sendEmailEthereal);
app.listen(PORT, () => {
  console.log(`server running on PORT : ${PORT}`);
});
