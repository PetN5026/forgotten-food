const router = require("express").Router();
const notes = require("../../models/notes");
const { ensureAuth } = require("../middleware/auth");
router.get("/", ensureAuth, async (req, res) => {
  console.log(req);
  const note = await notes.findOne({ foods: "banana" }).lean();
  res.send(note);
});

router.post("/create", async (req, res) => {
  try {
    console.log(req.user);
    await notes.create({ foods: "banana" });
    res.send("banana");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
