module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.send({ msd: "something something in ensureAuth" });
    }
  },
};
