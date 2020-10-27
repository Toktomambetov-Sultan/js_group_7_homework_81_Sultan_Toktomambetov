const e = require("express");
const express = require("express");
const { nanoid } = require("nanoid");
const config = require("../config");
const schemes = require("../schemes");
const router = express.Router();

router.get("/:originalUrl", async (req, res) => {
  res.send(await schemes.Link.findOne({ originalUrl: req.params.originalUrl }));
});

router.get("/post", async (req, res) => {
  const linkData = schemes.Link({
    originalUrl: req.body.url,
    shortUrl: nanoid(6),
  });
  try {
    await linkData.save();
    res.send(linkData);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
