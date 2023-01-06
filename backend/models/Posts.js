const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  color: {
    type: String,
    required: true,
    default: "none given",
  },
  clothe: {
    type: String,
    required: true,
    default: "none given",
  },
  len: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
