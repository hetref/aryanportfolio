const express = require("express");

const router = express.Router();

const postRoute = require("./postData");
router.use("/postData", postRoute);

const getRoute = require("./getData");
router.use("/getData", getRoute);

const deleteRoute = require("./deleteData");
router.use("/deleteData", deleteRoute);

const updateRoute = require("./updateData");
router.use("/updateData", updateRoute);

router.get("/", (req, res) => {
  res.send("Main Route");
});

module.exports = router;
