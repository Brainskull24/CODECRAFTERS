const express = require("express");
const router = express.Router();

const {contactController} = require("../controllers/contactController.js");
router.post("/contactform",contactController);

module.exports = router;