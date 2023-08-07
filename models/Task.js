const mongoose = require('mongoose');

const task = mongoose.Schema({
    title : {
        title : String,
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
        ref : "User"
    }
})