const mongoose = require("mongoose");

const PostTechSchema = mongoose.Schema({
  tech: {
    type: String,
    required: true,
  },
  talent: {
    type: String,
    required: true,
  },
  k: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PostTech", PostTechSchema);
