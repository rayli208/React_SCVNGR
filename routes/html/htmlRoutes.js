
const router = require("express").Router();
const path = require("path");

router.route("/").get(function (req, res) {
  // If the user already has an account send them to the members page
  // if (req.user) {
  //   return res.redirect(`/home`);
  // }
  res.sendFile(path.join(__dirname, "../../public/home.html"));
});

// Route to log user out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});


// router
//   .route("*")
//   .get((req, res) => {
//     res.sendFile(path.join(__dirname, "../../public/html/404.html"));
//   })
  

module.exports = router;