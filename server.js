require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.send("Default server up and running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})