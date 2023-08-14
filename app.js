const express = require ("express");
const app = express();
const userRoute = require("./routes/user.js");
const taskRoute = require("./routes/task.js");
const {config} = require('dotenv'); 
const CookieParser = require("cookie-parser");
const { errorMiddleware } = require("./middleware/error.js");
const ErrorHandler = require("./middleware/error.js");
const cors = require("cors");
config({
    path : "./database/config.env"
})
app.use(express.json());
app.use(CookieParser());
app.use(cors({
    origin : [process.env.FRONTEND_URI],
    methods : ["GET", "POST" ,"PUT",  "DELETE"],
    credentials : true
}))

app.use("/api/v1/",userRoute);
app.use("/api/v1/",taskRoute);

// error middleware
app.use(ErrorHandler)




module.exports = app;
