//contains database schema for the app
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchemaRewards = new Schema(
  {
    reward_id: Number,
    type: String,
    title: String,
    description: String,
    email: String,
    valid_date: Date,
    points: Number,
    store_id: Number,
  }
);

module.exports = mongoose.model("rewards", DataSchemaRewards);
