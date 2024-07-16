const express = require("express");
const router = express.Router();
const url = require("../models/url");
router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const urlObj = new url({ longUrl });
  await url.save();
  res.send({ longUrl, shortUrl: urlObj.shortUrl });
});
router.get("/:shorturl", async (req, res) => {
  const { shortUrl } = req.params;
  const urlObj = await url.findOne({ shortUrl });
  if (urlObj) {
    res.redirect(urlObj.longUrl);
  } else {
    res.send("URL not found");
  }
});
module.exports=router;