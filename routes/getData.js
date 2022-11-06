const express = require("express");
const PostLang = require("../models/PostLang");
const PostTech = require("../models/PostTech");

const router = express.Router();

router.get("/lang", async (req, res) => {
  //   res.send("Get Route");
  try {
    const postsLang = await PostLang.find();
    res.json(postsLang);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/tech", async (req, res) => {
  //   res.send("Get Route");
  try {
    const postsTech = await PostTech.find();
    res.json(postsTech);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
