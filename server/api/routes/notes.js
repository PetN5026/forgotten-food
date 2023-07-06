const router = require("express").Router();
const notes = require("../../models/notes");
router.get("/", async (req, res) => {
  const note = await notes.findOne({ foods: "banana" }).lean();
  res.send(note);
});

router.post("/create", async (req, res) => {
  try {
    await notes.create({ foods: "banana" });
    res.send("banana");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
