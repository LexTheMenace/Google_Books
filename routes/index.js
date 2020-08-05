const router = require("express").Router();
const path = require("path");
const bookRoutes = require("./api/books");

// REQUIRED
router.use("/api/books", bookRoutes);
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  
module.exports = router;