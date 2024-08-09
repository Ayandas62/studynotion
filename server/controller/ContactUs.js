const mailSender = require("../utils/mailSender")
exports.contactUs = async(req,res)=>{
    const {firstName,lastName,email,phoneNo,message} = req.body
    try{
        const emailResponse = await mailSender(email,
            "Your message recived ",
            `Hiii... ${firstName} ${lastName}
            your ,message email ${email} phone number ${phoneNo} and message ${message}`
        )
        console.log(emailResponse)
        return res.json({
            success:true,
            message:"Successfully data recived"
        })
    }catch(err){
        console.log(err)
        return res.json({
            success:false,
            message:"Error while send recive confirmation email send"
        })
    }
}