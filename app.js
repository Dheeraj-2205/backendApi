const express = require ("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017`,{dbName : "backendApi"}).then(()=>{
    console.log(`database is connected`);
}).catch((error)=>{
    console.log(error);
})

const schema = mongoose.Schema({
    name : String,
    email : String,
    password :String
})

const User = mongoose.model("Users", schema);

app.get("/",(req,res)=>{
    res.send("<h1>Data is showing</h1>");
})

app.get("/users/all", async(req,res)=>{
    const users = await User.find()
    res.json({
        success : true,
        users
    })
})

app.listen(3000,()=>{
    console.log(`server is running in 3000 port`);
})