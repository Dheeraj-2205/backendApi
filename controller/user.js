const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { cookieCreator } = require("../utils/features.js");

exports.createUser = async (req, res) => {
  const { email, password, name } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    return res.status(404).json({
      success: false,
      message: "User already Exists",
    });
  } else {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashPassword });

    cookieCreator(user,res,201,"Registered Successful");
  }
};

exports.loginUser = async (req, res, next) => {
  const {email,password} = req.body;
  const user = await User.findOne({email}).select("+password");
  console.log(email);
  if(!user){
    res.status(404).json({
      success : false,
      message : "Invalid Email And Password"
    })
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch){
    res.status(404).json({
      message : "Invalid Email And Password",
      success : false
    })
  }
  cookieCreator(user,res,200,`Welcome back ${user.name}`)
};

exports.logout = async (req, res) => {
  res.status(200).cookie("token", null , {expire : new Date(Date.now())}).json({
    message : "logout Successfully",
    success : true
  });
};

exports.getMyProfile = (req,res) => {

  res.status(200).json({
    success : true,
    user :req.user
  });
  
};

// exports.individual = async (req,res)=>{

//     const {id } = req.params;
//     const user = await User.findById(id);

//     res.json({
//         success : true,
//         user
//     })

// }
