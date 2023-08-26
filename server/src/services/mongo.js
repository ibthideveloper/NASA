const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:Ibthikar@nasacluster.sxsy1ng.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("Monmgodb connectioon is ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

module.exports = {
  mongoConnect,
};
