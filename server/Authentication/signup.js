const { connectDB } = require("./../Database");

const SIGNUP = (req, res) => {
  // const data = JSON.parse(req.body);
  connectDB().then(async (resp) =>
    resp
      .collection("users")
      .insertOne({
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        phone: req.body.phone,
        name: req.body.f_name,
      })
      .then((response) => res.sendStatus(200))
      .catch((err) => console.log(err))
  );
  console.log(req.body);
};

module.exports = { SIGNUP };
