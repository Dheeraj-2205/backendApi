const connectDb = require('./database/database.js');
const express =require('express');
const app = require("./app.js");


connectDb();


app.listen(process.env.PORT,()=>{
    console.log(`server is running in 3000 port`);
})