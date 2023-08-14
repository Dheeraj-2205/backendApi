const { createUser,loginUser, getMyProfile, logout } = require("../controller/user.js");
const { isAuthenticate } = require("../middleware/auth.js");
const  User = require("../models/User.js");

const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("<h1>Data is showing</h1>");
})

router.post("/newUser", createUser);
router.post("/login", loginUser);

router.get("/user", isAuthenticate , getMyProfile);
router.get("/logout", logout)

module.exports = router


// router.route("/userid/:id").get()
    




// req.params   dynamic route are always last 

// router.get("/userId/:id", individual)

// req.query

// router.get("/userid", async(req,res)=>{
//     const {data} = req.query;

//     const user = await User.findById(data);
    
//     res.json({
//         success : true,
//         user
//     })
// })



