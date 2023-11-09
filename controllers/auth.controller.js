const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')
const bcrypt = require('bcryptjs')

const signToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    })
}
exports.signUp = catchAsync(async(req,res,next)=>{

    
    const {firstName,lastName,email,password,confirmPassword,image} = req.body;
    if(!firstName || !lastName || !password || !confirmPassword) next(new AppError('All fields must be required!',404))
    
    if(await User.findOne({email})) next(new AppError('Email id is already registered',404))
    if(password.length < 8) next(new AppError('Password must be 8 characters'))
    if(password != confirmPassword) next(new AppError('Please confirm password!',404))
    //apswword encryption
    const hashedPass = bcrypt.hashSync(password,10);
 
    const newUser =await User.create({
      firstName,
      lastName,
      email,
      password:hashedPass,
      confirmPassword:hashedPass,
      image,
    });
    const token = signToken(newUser._id)
    res.status(200).json({
        status:'Success',
        token,
        newUser
    })

})

exports.logIn=catchAsync(async (req,res,next)=>{
    const {email,password}=req.body;;
   const user =await User.findOne({email}).select('+password');
   if(!user || !(await bcrypt.compare(password,user.password))){
    return next(new AppError('Incorrect email or password',401))
   }
    const loginUser={
        _id:user._id,
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        image:user.image

    }
   const token =signToken(user._id);
   res.status(200).json({
    status:'Success',
    token,
    loginUser
    
})
})