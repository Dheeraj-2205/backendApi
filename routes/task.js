
const isAuthenticate =  require("../middleware/auth.js");

const {newTask} = require("../controller/task.js")

const express = require("express");

const router = express.Router();

router.post("/newliner" ,isAuthenticate, newTask)

module.exports = router