const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')


const signToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    })
}
exports.signUp = catchAsync(async(req,res,next)=>{

    
    const {firstName,lastName,email,password,confirmPassword,image} = req.body;
    if(!firstName || !lastName || !password || !confirmPassword) next(new AppError('All fields must be required!',404))
 
    const newUser =await User.create({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      image,
    });
    const token = signToken(newUser._id)
    res.status(200).json({
        status:'Success',
        token,
        newUser
    })

})

exports.get=(req,res)=>{
    res.status(200).json({
        data:'success'
    })
}