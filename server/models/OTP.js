const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true,
    },
    createAt:{
        type:Date,
        default:Date.now(),
        expires:5*60*60*1000
    }
})

async function sendVerificationEmail(email,otp){
    try{
        const mailResponse = await mailSender(email,"Verification email from StudyNotion",otp);
        console.log("Mail send successfully",mailResponse);
    }catch(err){
        console.error("error occured sending mails",err);       
        throw err;
    }
}

OTPSchema.pre("save",async function(next){
    if(this.isNew){
        await sendVerificationEmail(this.email,this.otp);
    }
    next()
})

module.exports = mongoose.model("OTP",OTPSchema);