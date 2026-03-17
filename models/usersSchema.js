const mongoose = require("mongoose");
const schema = mongoose.Schema;

const usersSchema = new schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  address: String,
  city: String,
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
