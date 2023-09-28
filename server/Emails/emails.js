const { connectDB } = require("./../Database");

const GETEMAILS = async (req, res) => {
  console.log(req.body);
  connectDB().then(async (resp) =>
    // .find({ email: email, password: pass, role: role })
    resp
      .collection("emails")
      .find({})
      .toArray()
      .then((response) => res.status(200).send(response))
      .catch((err) => console.log(err))
  );
};

const date = new Date();
const ADDEMAIL = async () => {
  //   connectDB().then(async (resp) =>
  //     // .find({ email: email, password: pass, role: role })
  //     resp
  //       .collection("emails")
  //       .insertOne({
  //         name: "Mukkaram",
  //         email: "Please generate transcript",
  //         date: date.toLocaleDateString(),
  //         status: false,
  //       })
  //       .then((response) => console.log(response))
  //       .catch((err) => console.log(err))
  //   );
};

module.exports = { GETEMAILS, ADDEMAIL };
