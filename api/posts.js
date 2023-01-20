const router = require("express").Router();
const { publicPosts, privatePosts } = require("./database");
// const authToken = require("../middleware/authenticateToken");
const passport = require("passport");

router.get("/public", (req, res) => {
  res.json(publicPosts);
});

router.get(
  "/private",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(privatePosts);
  }
);

// router.get("/private", authToken, (req, res) => {
//   res.json(privatePosts);
// });

module.exports = router;
