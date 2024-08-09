const cors = require("cors")

const express = require('express');

const app = express();

require("dotenv").config();
const router = require("./routes/routes");
const userRoute = require("./routes/course");
const courseRoute = require("./routes/user");


// const cloudinaryConnect = require("./config/cloudinary");
const cookieParser = require("cookie-parser");
const {cloudinaryConnect} = require("./config/cloudinary");
const fileUpload = require("express-fileupload");

const PORT = process.env.PORT || 4000;
require("./config/dbConnect").dbConnect()

app.use(express.json());
app.use(cookieParser())
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true
    })
)

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp"
    })
)

cloudinaryConnect();

app.use("/api/v1",router);

app.get("/",(req,res)=>{
   return res.json({
        success:true,
        message:"your server is running up"
    })
})


app.listen(PORT,()=>{
    console.log("App running successfully")
})