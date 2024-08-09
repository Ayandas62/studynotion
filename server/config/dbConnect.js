const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("Databse connectioin successfull")})
    .catch((error)=>{
        console.error(error);
        console.log("ERROR IN DATABSE CONNECTION");
        process.exit(1);
    })
}