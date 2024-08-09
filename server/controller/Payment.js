const { default: mongoose } = require("mongoose");
const{instance} = require("../config/razorpay");
const Course = require("../models/course");
const User = require("../models/user");
const mailSender = require("../utils/mailSender");


exports.capturePayment = async(req,res)=>{
    try{
        const userId = req.user.id;
        const {courseId} = req.body;

        if(!courseId){
           return res.json({
                success:false,
                message:"invalid course id"
            })
        }
        let course;
        try{
            course = await Course.findById(courseId)
            const uid = new mongoose.Schema.Types.ObjectId(userId);
            if(!course){
              return res.json({
                    success:false,
                    message:"course is not found"
                })
            }else if(course.studentsEnrolled.includes(uid)){
                return res.json({
                    success:false,
                    message:"student all ready enrolled"
                })
            }
        }catch(error){
            console.log(error);
            res.json({
                success:false,
                message:error.message,
            });
        }

        const price = course.price;
        const currency = "INR";

        const option = {
            amount: price*100,
            currency,
            recipt:Math.random(Date.now()).toString(),
            notes:{
                courseId:courseId,
                userId
            }
        }

        try{
            const paymentResponse = await instance.orders.create(option)
            console.log(paymentResponse);
            return res.status(200).json({
                success:true,
                courseName:course.courseName,
                courseDescription:course.courseDescription,
                thumbnail:course.thumbnail,
                orderId:paymentResponse.id,
                amount:paymentResponse.amount,
                currency:paymentResponse.currency,
            })
        }catch(error){
            console.log(error);
            res.json({
                success:false,
                message:"could not initiate order"
            })
        }
    }catch(error){

    }
}


exports.verifySignature = async(req,res)=>{
    try{
        const webhookSecret = "12345678";
        const signature = req.headers["x-razorpay-signature"];

        const shasum = crypto.createHmac("sha256",webhookSecret);
        shasum.update(JSON.stringify(req.body));
        const digest = shasum.digest("hex")

        if(signature ===digest){
            console.log("payment is authorised")

            const {userId, courseId}= req.body.payload.payment.entity.notes

            try{
                const enrolledCourse = await Course.findOneAndUpdate({_id:courseId},
                    {$push:{studentsEnrolled:userId}},{new:true})

                if(!enrolledCourse){
                    return res.json({
                        success:false,
                        message:"course not found"
                    })
                }
                console.log(enrolledCourse);

                const enrolledStudent = await User.findOneAndUpdate({_id:userId},
                    {$push:{courses:courseId}},{new:true})
                console.log(enrolledCourse);

                const emailresponse = await mailSender(
                    enrolledStudent.email,
                    "Congratulations from StudyNotion",
                    "Congratulations, you are onboarded into new StudyNotion course"

                )
                console.log(emailresponse);

                return res.status(200).json({
                    success:true,
                    message:"Signature verifed and course added"
                })
            }catch(error){
                console.log(error);
                res.json({
                    success:false,
                    message:"course enrolled or student enrolled failed"
                })
            }
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Failed in payment or invalid request"
        })

    }
}