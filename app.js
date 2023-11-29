const express = require('express');
const app=express()
const cookieParser = require("cookie-parser");
const userRouter = require('./routes/user.routes.js');
const productRouter = require('./routes/product.routes')
const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/error.controller')
const cors = require("cors")


app.use((req, res, next) =>{ 
    res.setHeader( 'Content-Security-Policy', "script-src 'self' https://cdnjs.cloudflare.com" ); 
    next(); 
  })

  let frontEndUrl;
  if(process.env.NODE_ENV === 'production'){
         frontEndUrl = process.env.FRONTEND_URL
  }else frontEndUrl = "http://localhost:3000"
app.use(cors({
    origin: frontEndUrl,
    credentials: true, 
    // allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(cookieParser())

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

