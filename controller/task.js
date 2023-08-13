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

exports.updateTask = async(req,res,next) =>{
    const {id} = req.params;

    const task = await Task.findById(id);

    if(!task){
        return res.status(404).json({
            success :false,
            message : "Task is not found"
        });
    }else{
        task.isCreated = !task.isCreated;
        await task.save();
    }

    res.status(200).json({
        success : true,
        message: "Task Updated"
    })
}

exports.deleteTask = async(req,res,next) =>{
    const {id} = req.params;
    const task = await Task.findById(id);

    if(!task){
        return res.status(404).json({
            success :false,
            message : "Task is not found"
        });
    }else{
        await task.deleteOne();
    }

    res.status(200).json({
        success : true,
        message: "Task Updated"
    })
}