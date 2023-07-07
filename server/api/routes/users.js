const router = require("express").Router();
const User = require("../../models/Users");
const validator = require("validator");
const passport = require("passport");

router.get("/login", (req, res) => {
  console.log("in get", req.user);
  if (req.user) {
    console.log(req.user);
    const user = {
      _id: req.user._id,
      userName: req.user.userName,
      email: req.user.email,
    };

    console.log("in get login", user);
    return res.send(user);
  }
});
router.post("/create", async (req, res, next) => {
  try {
    const validationErrors = {};
    if (!validator.isEmail(req.body.email))
      validationErrors.emailErr = "Please enter a valid email address.";
    if (!validator.isLength(req.body.password, { min: 8 }))
      validationErrors.passwordErr =
        "Password must be at least 8 characters long";

    if (req.body.password !== req.body.confirmPassword)
      validationErrors.passwordMatchErr = "Passwords do not match";

    if (Object.keys(validationErrors).length) {
      console.log(validationErrors);
      res.send("Errors").end();
      return;
    }
    req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });

    const existing = await User.findOne({
      $or: [{ email: req.body.email }, { userName: req.body.userName }],
    });
    if (existing) {
      res.send("user already exists").end();
      return;
    }
    await User.create(req.body);
    console.log("new user creating", req.body, "req");
    res.send("new user creating");
  } catch (error) {
    console.log(error);
  }
});
router.post("/login", async (req, res, next) => {
  console.log(req.body);
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send("user not found");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      // req.flash("success", { msg: "Success! You are logged in." });
      res.send({ msg: "logged in", req: req.session });
    });
  })(req, res, next);
});

router.post("/logout", (req, res) => {
  req.logout(() => {
    console.log("User has logged out.");
  });
  req.session.destroy((err) => {
    if (err) {
      console.log("Error : Failed to destroy the session during logout.", err);
    }
    // console.log(req);
    req.user = null;
    res.send({ msg: "logged out" });
    // console.log(req.session);
  });
});
module.exports = router;
