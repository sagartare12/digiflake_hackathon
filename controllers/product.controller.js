const Product = require('../models/product.model')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')

exports.createProduct=catchAsync(async(req,res,next)=>{
  console.log('ji')
    const {name,category,productImage,price,description} = req.body;
    if(!name || !category || !productImage || !price || !description) next(new AppError('Please enter required fields')) 
    
    const newProduct = await Product.create({
      name,
      category,
      productImage,
      price,
      description,
    });

    res.status(200).json({
        status:'Success',
        newProduct
    })
})



exports.getAllProducts=catchAsync(async(req,res,next)=>{
  
const allProducts =await Product.find();
console.log(allProducts)

res.status(200).json({
  status:"Success",
  allProducts
})
})