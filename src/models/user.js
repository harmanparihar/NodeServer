//contains database schema for the app
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchemaUser = new Schema(
  {
    user_id: Number,
    username: String,
    password: String,
    address: String,
    email: String,
    dob: Date,
    points: Number,
    rewards: [],
  }
);

module.exports = mongoose.model("users", DataSchemaUser);
