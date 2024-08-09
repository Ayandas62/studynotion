const User = require("../models/user");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const Profile = require("../models/profile");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.sendOTP = async (req,res)=>{
    try{
        // fetch email from user body
        const {email} = req.body;

        // Check user is allready present

        const existUser = await User.findOne({email})

        if(existUser){
            return res.status(401).json({
                success:false,
                message:"User All ready exist"
            })
        }else{
            //otp generate
            var otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false      
            })
            let result = await OTP.findOne({otp:otp})
            while(result){
                otp = otpGenerator.generate(6,{
                    upperCaseAlphabets:false,
                    lowerCaseAlphabets:false,
                    specialChars:false
                })
                result = await OTP.findOne({otp:otp})
            }
            console.log("otp-->",otp)
            // const otpPayload = {email,otp}
            const otpBody = await OTP.create({email,otp})
            console.log("OTP create --->",otpBody)

            res.status(200).json({
                success:true,
                message:"OTP sent successfully",
                otp:otp
            })
        }
    }catch(error){
        console.log("error while otp send",error); 
        res.status(500).json({
            success:false,
            message:"otp send failed",
        })
    }
}

exports.signup = async(req,res)=>{
    try{
        //fetch all data
        const{
            firstName,lastName,email,password,
            confirmPassword,accountType,otp,contactNumber
        } = req.body

        //validateData
        if(!firstName||!lastName ||!password||!confirmPassword||!otp){
           return res.status(403).json({
                success:false,
                message:"All fields are required"
            })
        }
        
        //match password
        if(password!==confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Password doesn't match"
            })
        }

        // find existing user
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User Allready exist"
            })
        }

        //validate otp
        const Otp = await OTP.find({ email }).sort({ _id: -1 }).limit(1)
        // const recentOtp = Otp.otp        
        // console.log(Otp)
        console.log("otp-->",Otp);
        if (Otp.length === 0){
            return res.status(400).json({
                success:false,
                message:"OTP not found"
            })
        }else if(otp!==Otp[0].otp){
            return res.status(400).json({
                success:false,
                message:"invalid OTP"
            })
        }
        //password Hashing
        const hassedpass = await bcrypt.hash(password,10)

        //create entry in database

        const profileDetails = await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            contactNumber:null
        })

        const user = await User.create({
            firstName,lastName,email,password:hassedpass,
            accountType,additionalDetails:profileDetails._id,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        })
        res.status(200).json({
            success:true,
            message:"Successfully user registerd",
            data:user
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Fail to register user",
        })
    }
}

exports.login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email}).populate("additionalDetails")
        

        if(!email||!password){
            res.json({
                success:false,
                message:"Please fill all fields"
            })
        }else if(!user){
            res.json({
                success:false,
                message:"User is not registerd"
            })
        }else if(await bcrypt.compare(password,user.password)){
            const payload = {
                name:user.name,
                email:user.email,
                image:user.image,
                id:user.id,
                role:user.accountType
            }
            let token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"24h"
            })
            user.token = token;
            user.password = undefined
            const options = {
                expires: new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true
            }

            res.cookie("token",token,options).status(200).json({
                succcess:true,
                message:"log in successfull",
                token,
                user
            })
        }else{
            res.json({
                success:false,
                message:"password incorrect"
            })
        }
    }catch(error){
        console.log("error");
        res.status(500).json({
            success:true,
            message:"log in failed"
        })
    }
}


exports.changePassword = async(req,res)=>{
    try{
        const user = await User.findById(req.user.id)
        const {oldPassword,newPassword} = req.body;
        if(!await bcrypt.compare(oldPassword,user.password)){
            res.json({
                success:false,
                message:"Password is not match"
            })
        }
        else{
        const hassPassword =await bcrypt.hash(newPassword,10)
        const updatedUser = await User.findByIdAndUpdate(req.user.id,
            {password:hassPassword},
        {new:true})
        res.json({
            success:true,
            message:"Successfully update Password",
            updatedUser
        })
        }
        
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message:"Error while Change Password"
        })
    }
}