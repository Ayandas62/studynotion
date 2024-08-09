const SubSection = require("../models/subSection");
const Section = require("../models/section");
const {uploadImageToCloudinary} = require("../utils/imageUploader")
require("dotenv").config();


exports.createSubSection = async(req,res)=>{
    try{
        const {sectionId,title,timeDuration,description} = req.body;
        const video = req.files.videoFile
        if(!title||!timeDuration||!description||!video||!sectionId){
            res.json({
                success:false,
                message:"All fields are required"
            })
        }else{
            const videoDetails = await uploadImageToCloudinary(video,process.env.FOLDER_NAME)
            const newSubsection = await SubSection.create({
                title,timeDuration,description,videoUrl:videoDetails.secure_url
            })
            const updatedSection = await Section.findByIdAndUpdate(sectionId,
                {$push:{subSection:newSubsection._id}},{new:true}).populate("subSection").exec()

            res.status(200).json({
                success:true,
                message:"Successfully create new section"
            })
        }
    }catch(error){
        console.log("error while create sub section --->",error);
        res.status(500).json({
            success:false,
            message:"error while create subsection or update section"
        })
    }
}


exports.updateSubSection = async(req,res)=>{
    try{

    }catch(error){
        console.log(error)
    }
}

exports.deleteSubSection = async(req,res)=>{
    try{

    }catch(error){
        console.log(error)
    }
}