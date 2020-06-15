const router = require("express").Router();
const recommendationRoutes = require("./recommendations");

// Rec routes
router.use("/recommendations", recommendationRoutes);
module.exports = router;
