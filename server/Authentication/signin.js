const express = require("express");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const app = express();
const { connectDB } = require("./../Database");

const KEY = "user-auth";
const SIGNIN = async (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  const role = req.body.role;
  console.log(req.body);
  connectDB().then(async (resp) =>
    // .find({ email: email, password: pass, role: role })
    resp
      .collection("users")
      .find({
        ...req.body,
      })
      .toArray()
      .then((response) => res.status(200).send(response))
      .catch((err) => console.log(err))
  );
  // await connectDB().then(async (resp) =>
  //   // .find({ email: email, password: pass, role: role })
  //   resp
  //     .collection("users")
  //     .find({ ...req.body })
  //     .then((response) => res.status(200).send(response))
  //     .catch((err) => console.log(err))
  // );
};

// app.get("/verify", async (req, res) => {
//   console.log(req);
//   console.log("hi");
//   jwt.verify(req.header("token"), KEY);

//   try {
//     verifyRequest(req.header("token"));
//     console.log("verified");
//     res.send({ verified: "true", name: "ahmed" });
//   } catch (error) {
//     console.log("verified fail");
//   }
// });

// function verifyRequest(token) {
//   return jwt.verify(token, KEY);
// }

module.exports = { SIGNIN };
