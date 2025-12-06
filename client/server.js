const express = require('express');
const env = require("dotenv");
const  connectDB = require('./config/db.js');
const cors = require("cors");
const cookieParser = require("cookie-parser")
const app = express();
env.config();
connectDB();

//connection cors
const allowOrigins = [""]
app.use(cors({
    origin: function (origin, callback){
        if(!origin || allowOrigins.includes(origin)){
            callback(null, true)
        } else {
            callback(new Error ('not allowed by cors'));
        }
    },

       credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.json());
app.use(cookieParser())

app.get("/", (req,res) => {
    res.send("hello world")
})

app.listen(process.env.PORT, (req,res) => {
    console.log(`project listen on port number 3000`);
})