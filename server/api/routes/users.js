const router = require("express").Router();
const User = require("../../models/Users");

router.post("/create", async (req, res) => {
  try {
    await User.create(req.body);
    console.log("new user creating", req.body, "req");
    res.send("new user creating");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
