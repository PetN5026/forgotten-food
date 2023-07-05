const router = require("express").Router();
const notes = require("../../models/notes");
router.get("/", (req, res) => {
  res.send("stuff");
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
