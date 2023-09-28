const { ObjectID } = require("bson");
const { connectDB } = require("./../Database");

const GETUSERS = async (req, res) => {
  console.log(req.body);
  connectDB().then(async (resp) =>
    // .find({ email: email, password: pass, role: role })
    resp
      .collection("users")
      .find({})
      .toArray()
      .then((response) => res.status(200).send(response))
      .catch((err) => console.log(err))
  );
};
const UPDATEUSER = async (req, res) => {
  console.log(req.body._id);

  connectDB().then(async (resp) =>
    // .find({ email: email, password: pass, role: role })
    resp
      .collection("users")
      .updateOne(
        { _id: ObjectID(req.body._id) },
        // { name: req.body.name },
        {
          $set: {
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            phone: req.body.phone,
            name: req.body.name,
          },
          $currentDate: { lastModified: true },
        }
      )
      .then((response) => res.status(200).send(response))
      .catch((err) => console.log(err))
  );
};

module.exports = { GETUSERS, UPDATEUSER };
