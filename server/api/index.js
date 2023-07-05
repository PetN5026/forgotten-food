const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("api");
});

router.use("/notes", require("./routes/notes"));
router.use("/users", require("./routes/users"));
module.exports = router;
