const router = require("express").Router();
const notes = require("../../models/notes");
const { ensureAuth } = require("../middleware/auth");
router.get("/", ensureAuth, async (req, res) => {
  console.log(req);
  const note = await notes.find({ userId: req.user.id }).lean();
  res.send(note);
});

router.post("/create", async (req, res) => {
  try {
    const date = new Date(req.body.date.replace("-", "/").replace("-", "/"));

    const postObj = {
      foods: req.body.food,
      userId: req.body.userId,
      comments: req.body.comments,
      date,
    };
    console.log(req.user);
    const created = await notes.create(postObj);
    res.send(created);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
