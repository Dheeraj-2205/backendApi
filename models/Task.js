const mongoose = require('mongoose');

const task = new mongoose.Schema({

    title : {
        type : String,
        required :true
    },
    description : {
        type : String,
        required :true
    },
    isCreated : {
        type : Boolean,
        default : false
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
})

const Task = mongoose.model("Task",task);

module.exports = Task;