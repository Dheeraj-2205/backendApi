const express = require ("express");
const app = express();
const userRoute = require("./routes/user.js");
const {config} = require('dotenv'); 
const CookieParser = require("cookie-parser");

config({
    path : "./database/config.env"
})
app.use(express.json());
app.use(CookieParser());

app.use("/api/v1/",userRoute);




module.exports = app;
