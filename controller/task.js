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

exports.getmyTask = async (req,res,next) =>{
    const userId = req.user._id;

    const tasks = await Task.find({user:userId});

    res.status(200).json({
        success : true,
        tasks
    })
}

exports.updateTask = async() =>{
    const {id} = req.params;

    const task = await Task.findById(id);

    task.isCreated = !task.isCreated;
    await task.save();

    res.status(200).json({
        success : true,
        message: "Task Updated"
    })
}

exports.deleteTask = async(req,res,next) =>{
    const {id} = req.params;
    const task = await Task.findById(id);

    await task.remove();

    res.status(200).json({
        success : true,
        message: "Task Updated"
    })
}