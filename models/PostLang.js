const mongoose = require("mongoose");

const PostLangSchema = mongoose.Schema({
  lang: {
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

module.exports = mongoose.model("PostLang", PostLangSchema);
