//contains database schema for the app
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchemaStores = new Schema(
  {
    store_id: Number,
    name: String,
    title: String,
    description: String,
    email: String,
    valid_date: Date,
    rewards: [],
    users: []
  }
);

module.exports = mongoose.model("stores", DataSchemaStores);
