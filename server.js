const connectDb = require('./database/database.js');
const app = require("./app.js");


connectDb();


app.listen(process.env.PORT,()=>{
    console.log(`server is running in ${process.env.PORT}  and ${process.env.NODE_ENV}port`);
})