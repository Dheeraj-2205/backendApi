const ErrorHandler = require("../middleware/error.js");
const Task = require("../models/Task.js");


exports.newTask = async (req,res,next) => {
    try {
        const {title,description} = req.body
        await Task.create({
            title ,description,
            user : req.user
        });

        res.status(200).json({
            success: true,
            message : "Task added successfully"
        })
    } catch (error) {
        next(error)
    }
}

exports.getmyTask = async (req,res,next) =>{
    try {
        const userId = req.user._id;

        const tasks = await Task.find({user:userId});
    
        res.status(200).json({
            success : true,
            tasks
        })
    } catch (error) {
        next(error)
    }
}

exports.updateTask = async(req,res,next) =>{
    const {id} = req.params;

    const task = await Task.findById(id);

    if(!task){
        return next(new ErrorHandler("Invalid",404))
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
    try {
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
    } catch (error) {
        next(error);
    }
}