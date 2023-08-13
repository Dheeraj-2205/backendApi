
const {isAuthenticate} =  require("../middleware/auth.js");

const {newTask, getmyTask, updateTask, deleteTask} = require("../controller/task.js")

const express = require("express");

const router = express.Router();

router.post("/newliner" ,isAuthenticate, newTask)
router.get("/all", isAuthenticate, getmyTask );

router.route("/:id").put(isAuthenticate,updateTask).delete(isAuthenticate,deleteTask)

module.exports = router