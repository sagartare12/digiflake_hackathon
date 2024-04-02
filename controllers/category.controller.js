const Category = require('../models/category.model')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')


exports.createCategory=catchAsync(async(req,res,next)=>{
    const allCategory =await Category.find();
    const {categoryName,description,status} = req.body;
    if(!categoryName || !description || !status ) next(new AppError('Please enter required fields')) 
    
    const newCategory = await Category.create({
        categoryName,
        description,
        status,
    });
    newCategory.id=allCategory.length+1;
    newCategory.save();
    res.status(200).json({
        statuss:'Success',
        newCategory
    })
})



exports.getAllCategory=catchAsync(async(req,res,next)=>{
  
    const allCategory =await Category.find();
    
    
    res.status(200).json({
      statuss:"Success",
      allCategory
    })
    })