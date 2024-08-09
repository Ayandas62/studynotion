const User = require("../models/user");
require('dotenv').config()
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");

exports.resetPasswordToken = async(req,res)=>{
    try{
        const email = req.body.email;
        const user = await User.findOne({email});
        if(!user){
            res.json({
                success:false,
                message:"User is not registerd",
            })
        }else{
            const token = crypto.randomUUID()
        const updatedPassword = await User.findOneAndUpdate({email:email},
            {token:token,resetPasswordExpires:Date.now()+5*60*1000})
            console.log(updatedPassword)
        const url= `http://localhost:3000/update-password/${token}` 
        await mailSender(email,"Password reset link",`click here to change password ${url}`)
        res.status(200).json({
            success:true,
            message:"Successfully send mail"
        })
        }

        
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:true,
            message:"something went wrong while reset password"
        })

    }
}


exports.resetPassword = async(req,res)=>{
    try{
        const {password,confirmPassword,token} = req.body;
        if(password!==confirmPassword){
            res.json({
                message:"Password dosn't match"
            })
        }

        const userDetails = await User.findOne({token:token});
        if(!userDetails){
            return res.json({
                success:false,
                message:"Token is invalid"
            })
        }
        if(userDetails.resetPasswordExpires<Date.now()){
            res.json({
                success:false,
                message:"token expire"
            })
        }

        const hassedPassword = await bcrypt.hash(password,10)

        await User.findOneAndUpdate({token:token},{password:hassedPassword},{new:true})

        res.status(200).json({
            success:true,
            message:"Password reset successfully"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"error while reset password"
        })
    }
}