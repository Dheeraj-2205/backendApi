const express = require ("express");
const app = express();
const userRoute = require("./routes/user.js");
const {config} = require('dotenv') 

config({
    path : "./database/config.env"
})
app.use(express.json());
app.use("/api/v1/",userRoute);




module.exports = app;
