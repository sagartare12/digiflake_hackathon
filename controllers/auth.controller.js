const { promisify} = require('util');
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')
const bcrypt = require('bcryptjs')
const cookieParser = require("cookie-parser");

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
    const token = signToken(newUser._id);
    res.cookie('jwt',token, {
    expires:new Date(
        Date.now()+60*1000
    ),
    httpOnly:true
   })
    res.status(200).json({
        status:'Success',
        token,
        newUser
    })

})

exports.logIn=catchAsync(async (req,res,next)=>{
    const {email,password}=req.body;;
    console.log('Cookie set:', req.cookies);
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


   const cookieOptions = {
    expires: new Date(
      Date.now() +  4 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: true,
    sameSite: 'None',
  };

  // if(process.env.NODE_ENV === 'production') {
  //   cookieOptions.secure = true;
  //   console.log(process.env.NODE_ENV)
  // }

   res.cookie('jwt',token,cookieOptions);
  



   res.status(200).json({
    status:'Success',
    token,
    loginUser
    
})
})

exports.logout =(req,res)=>{

    // res.cookie('jwt','loggedout',{
    //     expires:new Date(
    //         Date.now()+1000*10
    //     ),
    //     httpOnly:true
    // })
    const cookieOptions = {
        expires: new Date(
          Date.now() +  10 * 1000
        ),
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      };
    
    if(process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt','loggedout',cookieOptions)

    res.status(200).json({
        status:'Success',
    })
}

exports.getAllUsers=catchAsync(async(req,res,next)=>{
    
    const allUsers =await User.find();
    res.status(200).json({
      status:"Success",
      allUsers
    })
    })

    exports.protect = catchAsync(async (req, res, next) => {
        // 1) Getting token and check of it's there
       let token;
        if(req.headers.cookie && 
            req.headers.cookie.split("=")[0] === "jwt"){
            token = req.headers.cookie.split("=")[1]
        }
    
    
        // 2) Check if user not log in
        if (!token) {
          return next(
            new AppError('You are not logged in! Please log in to get access.', 401)
          );
      
      }
      const decode = await promisify(jwt.verify)(token , process.env.JWT_SECRET)
      
          // 3) Check that the user still exist     
         const loggedInUser =  await User.findById(decode.id);
        
         if(!loggedInUser){
             return next (
                 new AppError('The user belonging to this id is no longer exist!',401)
             )
         }
      
 
       req.user = loggedInUser;
        next();
      })