const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running");
});

app.post("/callback", (req, res) => {
  console.log("Payment success:", req.body);
  res.sendStatus(200);
});

app.listen(3000, () => console.log("Server started"));
