const cloudinary = require("cloudinary").v2

exports.uploadImageToCloudinary = async(file,folder,height,quality)=>{
    
    try{
        const option = {folder}
        option.resourse_type = "auto"
        if(height){
            option.height = height
        }
        if(quality){
            option.quality = quality
        }

        return await cloudinary.uploader.upload(file.tempFilePath,{resource_type:'auto',folder:'StudyNotion'})
    }catch(error){
        console.log(error)
    }
}