const mongoose = require('mongoose');

const connectDb = () =>{
    mongoose
    .connect(process.env.MONGO_URI,{dbName : "backendApi"})
    .then(()=>{
        console.log(`database is connected`);
    })
    .catch((error)=>{
        console.log(error);
    })

}

module.exports = connectDb;