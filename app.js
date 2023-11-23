const express = require('express');
const app=express()
const userRouter = require('./routes/user.routes.js');
const productRouter = require('./routes/product.routes')
const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/error.controller')
const cors = require("cors")
app.use(cors());
app.use(express.json({limit:"10mb"}));


//routes

app.use('/api/v1/users' , userRouter);
app.use('/api/v1/products',productRouter)
// app.post("/signup",(req,res)=>{
//     console.log(req.body);
// })
//unhandled routes
app.all('*',(req,res,next)=>{
    // const err= new Error(`Cant't find ${req.originalUrl} on this server!`)
    // err.status='fail';
    // err.statusCode=404;
    
    // next(err);


    next(new AppError(`Cant't find ${req.originalUrl} on this server!`,404))
})

//error handling
app.use(globalErrorHandler)





module.exports = app;

