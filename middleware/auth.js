const User = require("../models/User.js");
const jwt = require ("jsonwebtoken")
exports.isAuthenticate = async(req,res,next) =>{
    const {token} = req.cookies

    if(!token){
        res.status(404).json({
        message : "Login First",
        success : false
        })
    }

    const decoded = jwt.verify(token,process.env.SECRET_KEY);
    req.user = await User.findById(decoded._id);
    next();
}