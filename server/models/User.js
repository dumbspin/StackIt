const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // hash this later
});

module.exports = mongoose.model("User", userSchema);
