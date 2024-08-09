const Category = require("../models/cetegory");


exports.createCategory = async(req,res)=>{
    try{
        const {name,description} =req.body;
        if(!name || !description){
          return res.json({
                success:false,
                message:"all fields are required"
            })
        }else{
            const categoryDetails = await Category.create({
                name:name,
                description:description
            })
            res.status(200).json({
                success:true,
                message:"successfully create Tag",
                data:categoryDetails
            })
        }

        
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Error while create Tag"
        })
    }
}


exports.showAllCategory = async(req,res)=>{
    try{
        const allCategory = await Category.find({},{name:true,description:true});
        res.status(200).json({
            success:true,
            message:"successfully fetched all course data",
            data:allCategory,
        })
    }catch(error){
        console.log("Error while show all tags-->",error)
        return res.status(500).json({
            success:false,
            message:"Error while show all tags"
        })
    }
}


exports.categoryPageDetails = async(req,res)=>{
    try{
        const {categoryId} = req.body;

        const selectedCategory = await Category.findById(categoryId)
        .populate("courses").exec()

        if(!selectedCategory){
            res.status(404).json({
                success:false,
                message:"Data not found"
            })
        }

        const differentCategory = await Category.find({
            _id:{$ne:categoryId},
        }).populate("courses").exec();

        res.status(200).json({
            success:true,
            data:{
                selectedCategory,
                differentCategory,
            }
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:error.message 
        })
    }
}