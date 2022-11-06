const express = require("express");
const PostLang = require("../models/PostLang");
const PostTech = require("../models/PostTech");

const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

// Update Post
router.patch("/lang/:postId", async (req, res) => {
  try {
    const updatePostLang = await PostLang.updateOne(
      { _id: req.params.postId },
      { $set: { lang: req.body.lang, talent: req.body.talent, k: req.body.k } }
    );
    res.json(updatePostLang);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update Post
router.patch("/tech/:postId", async (req, res) => {
  try {
    const updatePostTech = await PostTech.updateOne(
      { _id: req.params.postId },
      { $set: { tech: req.body.tech, talent: req.body.talent, k: req.body.k } }
    );
    res.json(updatePostTech);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
