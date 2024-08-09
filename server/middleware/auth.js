const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user");

exports.auth = (req,res,next)=>{
    try{
        const token =req.cookies.token||req.body.token
        ||(req.header("Authorization") && req.header("Authorization").replace("Bearer ", ""));
        if(!token){
            res.status(401).json({
                succcess:true, 
                message:"token missing"
            })
        }else{
            try{
                const decode = jwt.verify(token,process.env.JWT_SECRET)
                req.user = decode
                // console.log("decode Data ->",decode)
            }catch(error){
                console.log(error);
                res.status(500).json({
                    succcess:true,
                    message:"invalid token"
                })
            }
          next( )
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            succcess:false,
            message:"failed invalid token"
        })
    }
}

exports.isStudent = (req,res,next)=>{
    try{
        if(req.user.role !== "Student"){
            res.status(401).json({
                succcess:false,
                message:"You are not a student"
            })
        }else{
            next()
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            succcess:false,
            message:"User role cant verify, please try again"
        })
    }
}

exports.isAdmin = (req,res,next)=>{
    try{
        if(req.user.role !== "Admin"){
            res.status(401).json({
                succcess:false,
                message:"You are not a Admin"
            })
        }else{
            next()
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            succcess:false,
            message:"User role cant verify, please try again"
        })
    }
}

exports.isInstructor = (req,res,next)=>{
    try{
        console.log(req.user);
        if(req.user.role !== "Instructor"){
            res.status(401).json({
                succcess:false,
                message:"You are not a Instructor"
            })
        }else{
            next()
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            succcess:false,
            message:"User role cant verify, please try again"
        })
    }
}