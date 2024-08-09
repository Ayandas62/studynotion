const { default: mongoose } = require("mongoose");
const Course = require("../models/course");
const Profile = require("../models/profile");
const User = require("../models/user");

exports.profile = async (req, res) => {
    try {
      const {
        firstName,
        lastName ,
        gender ,
        dateOfBirth ,
        about ,
        contactNumber,
      } = req.body;
 
      const userId = req.user.id;
      const userDetails = await User.findById(userId);
  
      if (!userDetails) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
  console.log(userDetails.additionalDetails)
      await Profile.findByIdAndUpdate(userDetails.additionalDetails, {
        gender,
        dateOfBirth,
        about,
        contactNumber
      });
  
      await User.findByIdAndUpdate(userId, { firstName, lastName });
  
      const updatedUserDetails = await User.findById(userId)
        .populate("additionalDetails")
        .exec();
  console.log(updatedUserDetails)
      res.status(200).json({
        success: true,
        message: "Successfully updated profile data",
        data: updatedUserDetails,
      });
    } catch (error) {
      console.error("Error while updating profile data or user:", error);
      res.status(500).json({
        success: false,
        message: "Error while updating profile data or user",
      });
    }
  };
  


exports.deleteAccount = async(req,res)=>{
    try{
        const userId = req.user.id;
        const userDetails = await User.findById(userId)
        if(!userDetails){
            res.json({
                success:false,
                message:"usernot found"
            })
        }else{
            await Profile.findByIdAndDelete({_id:new mongoose.Types.ObjectId(userDetails.additionalDetails)});
            if(!userDetails.courses == null){
                await Course.findByIdAndUpdate({_id:new mongoose.Types.ObjectId(userDetails.courses)},
                {$pull:{studentsEnrolled:userId}},{new:true})
            }           
            await User.findByIdAndDelete({_id:userId})
            
            res.status(200).json({
                success:true,
                message:"successfully Delete account"
            })
        }
    }catch(error){
        console.log("Error while delete Profile data or User data--->",error);
        res.status(500).json({
            success:false,
            message:"Error while delete Profile data or User data"
        })
    }
}

exports.getEnrolledCourses = async(req,res)=>{
  try{
    const user = req.user.id;
    const userDetails = await User.findOne({_id:user}).populate("courses").exec();

    if(!userDetails){
      return res.json({
        success:false,
        message:"User not found"
      })
    }
    res.status(200).json({
      success:true,
      message:"fetch all enrolled course",
      data:userDetails.courses
    })
      }catch(err){
    console.log(err)
    res.json({
      success:false,
      message:"Failed to fetch enrolled course"
    })
  }
}