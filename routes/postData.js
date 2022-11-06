const express = require("express");
const PostLang = require("../models/PostLang");
const PostTech = require("../models/PostTech");

const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.post("/lang", async (req, res) => {
  const postLang = new PostLang({
    lang: req.body.lang,
    talent: req.body.talent,
    k: req.body.k,
  });

  try {
    const dataToSave = await postLang.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/tech", async (req, res) => {
  const postTech = new PostTech({
    tech: req.body.tech,
    talent: req.body.talent,
    k: req.body.k,
  });

  try {
    const dataToSave = await postTech.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
