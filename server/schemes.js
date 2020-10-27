const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Link = new Schema({
  originalUrl: {
    type: String,
    required: true,
    unique: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
});

module.exports = {
  Link: mongoose.model("Link", Link),
};
