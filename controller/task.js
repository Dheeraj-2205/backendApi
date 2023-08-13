const Task = require("../models/Task.js");


exports.newTask = async (req,res) => {
    const {title,description} = req.body
    await Task.create({
        title ,description,
        user : req.user
    });

    res.status(200).json({
        success: true,
        message : "Task added successfully"
    })
}