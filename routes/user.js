const { getAllUser,individual, createUser } = require("../controller/user.js");
const  User = require("../models/User.js");

const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("<h1>Data is showing</h1>");
})

router.post("/newUser", createUser)
router.post("/login", loginUSer)

router.get("/all", getAllUser)


router.route("/userid/:id").get()
    



module.exports = router

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



