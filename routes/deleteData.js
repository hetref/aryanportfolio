const express = require("express");
const PostLang = require("../models/PostLang");
const PostTech = require("../models/PostTech");

const router = express.Router();

// Delete Post
router.delete("/lang/:postId", async (req, res) => {
  try {
    const removedPostLang = await PostLang.remove({ _id: req.params.postId });
    res.json(removedPostLang);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete Post
router.delete("/tech/:postId", async (req, res) => {
  try {
    const removedPostTech = await PostTech.remove({ _id: req.params.postId });
    res.json(removedPostTech);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
