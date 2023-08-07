const User = require('../models/User.js');

exports.createUser = async (req,res)=>{
    console.log("object");
    const {email,name, password} = req.body;

   await User.create({
        name,email,password
    });

    res.status(201).json({
        success: true,
        message: "Data is showing",
    })
}


exports.getAllUser =  async(req,res)=>{

    const query = req.query;
    console.log(query);
    const users = await User.find()
    res.json({
        success : true,
        users
    });

}

exports.individual = async (req,res)=>{

    const {id } = req.params;
    const user = await User.findById(id);

    res.json({
        success : true,
        user
    })

}