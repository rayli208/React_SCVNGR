const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes");
// const authRoutes = require("./authRoutes")

// router.use("/home", authRoutes);
router.use("/", htmlRoutes);

module.exports = router;