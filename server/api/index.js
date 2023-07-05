const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("api");
});

router.use("/notes", require("./routes/notes"));

module.exports = router;
