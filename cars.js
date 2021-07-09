const express = require("express");
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log("date received from the router middleware: ", Date.now());
    next();
});
router.get("/", function (req, res) {
    res.send("Landing page with Cars");
});
router.get("/details", function (req, res) {
    res.send("Details about cars");
});

module.exports = router;
