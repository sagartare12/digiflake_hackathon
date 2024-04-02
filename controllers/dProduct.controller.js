const DProduct = require('../models/dproduct.model')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')


exports.createDProduct=catchAsync(async(req,res,next)=>{
  


    const products= await DProduct.find();

    const newDProduct= await DProduct.create(req.body)
    newDProduct.id=products.length+1;
    newDProduct.save();
    // console.log(newDProduct)
    res.status(200).json({
        statuss:'Success',
        newDProduct
    })
})



exports.getAllDProduct=catchAsync(async(req,res,next)=>{
  
    const allDProduct =await DProduct.find();
    
    
    res.status(200).json({
      statuss:"Success",
      allDProduct
    })
    })