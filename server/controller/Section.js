const Course = require("../models/course");
const Section = require("../models/section");

exports.createSection = async(req,res)=>{
    try{
        const {sectionName,courseId} = req.body;

        if(!sectionName || !courseId){
            res.json({
                success:false,
                message:"All fields are required"
            })
        }else{
            const newSection = await Section.create({sectionName});
            try{
                const updatedCourse = await Course.findByIdAndUpdate(courseId,
                    {$push:{courseContent:newSection._id}},{new:true})
            }catch(error){
                console.log(error)
            }
           
            
            res.status(200).json({
                success:true,
                message:"Section creeate successfully",
                data:newSection,
               // courseData:updatedCourse
            })
        }
    }catch(error){
        console.log("Error while create section or update course--->",error);
        res.status(500).json({
            success:true,
            message:"Error while create section"
        })
    }
}


exports.updateSection = async(req,res)=>{
    try{
        const {sectionName,sectionId} = req.body;
        if(!sectionName || !sectionId){
            res.json({
                success:false,
                message:"All fields are required",
            })
        }else{
            const updatedSection = await Section.findByIdAndUpdate(sectionId,
                {sectionName:sectionName},{new:true})
            
            res.status(200).json({
                success:true,
                message:"Successfully update section name"
            })
        }
    }catch(error){
        console.log("Error while update section or--->",error);
        res.status(500).json({
            success:true,
            message:"Error while create section"
        })
    }
}

exports.deleteSection = async(req,res)=>{
    try{
        const {courseId,sectionId} = req.body;
        if(!courseId || !sectionId){
            res.json({
                success:false,
                message:"All fields are required"
            })
        }else{
            const updatedSection = await Section.findByIdAndDelete(sectionId);
            const updatedCourse= await Course.findByIdAndUpdate(courseId,
                {$pull:{courseContent:sectionId}})
            res.status(200).json({
                success:true,
                message:`successfully deleted Section with Id ${sectionId}`
            })
        }
    }catch(error){
        console.log("Error while delete section or update course--->",error);
        res.status(500).json({
            success:true,
            message:"Error while delete section"
        })
    }
}