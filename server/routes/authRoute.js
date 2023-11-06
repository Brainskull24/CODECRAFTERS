const express = require("express");
const router = express.Router();

const {register,login,codedetails} = require("../controllers/authController.js")
router.post("/register",register);
router.post("/login",login);
router.post("/codedetails",codedetails);
module.exports = router;