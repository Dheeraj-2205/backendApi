const mongoose = require('mongoose');

const connectDb = () =>{
    mongoose
    .connect(process.env.MONGO_URI,{dbName : "backendApi"})
    .then((c)=>{
        console.log(`database is connected ${c.connection.host}` );
    })
    .catch((error)=>{
        console.log(error);
    })

}

module.exports = connectDb;