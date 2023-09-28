const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");
const { SIGNUP, SIGNIN } = require("./Authentication");
const { connectDB } = require("./Database");
const { GETUSERS, UPDATEUSER } = require("./users/users");
const { GETEMAILS, ADDEMAIL } = require("./Emails");
const app = express();
dotenv.config();
// app.use(express.bodyParser());

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);

const port = process.env.PORT;

app.post("/signup", SIGNUP);
app.post("/signin", SIGNIN);
app.get("/api/getusers", GETUSERS);
app.get("/api/getemails", GETEMAILS);
app.post("/api/updateuser", UPDATEUSER);
// ADDEMAIL();
app.listen(port, () => console.log(`running ${port}`));
