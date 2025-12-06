const mongoose = require("mongoose");

const connectDB = async () => {
  try{
   await mongoose.connect(process.env.DBURL)
   console.log("DB conection successfully")
  } catch(err){
    console.log("DB connection failed", err.message);
  }
}

module.exports =  connectDB;