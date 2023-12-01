const Cart =require("../models/userCart.model")
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')
const User = require('../models/user.model')
const Product = require('../models/product.model')


exports.createUserCart =catchAsync(async(req,res,next)=>{
    const {itemId,quantity,itemPrice}=req.body

    //get the user id
    const itemid = req.params.id

const user = await User.findById(req.user._id);

const item  =await Product.findById(req.params.id)

const isItemPrsent = user.cart.filter((item)=> itemid === item.id)

console.log("it"+isItemPrsent)



//if item present but deleted


isItemPrsent[0] &&  await User.findOneAndUpdate(
    { _id: req.user._id, 'cart.id': itemid },  // Query to find the user and the item in the cart
    {  $set: { 'cart.$.isDelete':false} },  // Increment quantity
    { new: true }  // Return the updated document
  );

!isItemPrsent[0] && user.cart.push({
    id:itemid,
    total:item.price,
    quantity:1,
    isDelete:false
})
const s =await user.save()
console.log(s)
    //push this cart doc id into user cart id
res.status(200).json({
  status:"Success",
  updatedCart:s.cart,
  message:"Cart added successfully."
})
})


exports.getAllCart=catchAsync(async(req,res,next)=>{


    const user = await User.findById(req.user._id);
    console.log(user.cart[0])
let allCarts=[]
    if( user.cart[0]=== undefined){
        return next(new AppError('No any cart items found.',201))
    }
for(let i=0;i<user.cart.length;i++){
    const item =await Product.findById(user.cart[i].id )

    const newObj ={
        total:user.cart[i].total,
        quantity:user.cart[i].quantity
    }
console.log(item)
    if(user.cart[i].isDelete === false){
   const newItem ={...item.toObject(),...newObj}
     allCarts.push(newItem)
    }

}
  
   
    console.log("aertrt"+allCarts)
  

   
    res.status(200).json({
        status:"Success",
        allCarts
        
      })
})

exports.increaseItem=catchAsync(async(req,res,next)=>{
    const itemId = req.params.id
    const userId = await User.findById(req.user._id);
    const item =await Product.findById(itemId);
    const itemPrice = item.price;
    const updatedUser = await User.findOneAndUpdate(
        { _id: userId, 'cart.id': itemId },  // Query to find the user and the item in the cart
        { $inc: { 'cart.$.quantity': 1,'cart.$.total':itemPrice } },  // Increment quantity
        { new: true }  // Return the updated document
      );
    res.status(200).json({
        status:'Success', 
        message: 'Cart updated successfully', 
        user: updatedUser 
    });
})


exports.decreaseItem=catchAsync(async(req,res,next)=>{
    const itemId = req.params.id
    const userId = await User.findById(req.user._id);
    const item =await Product.findById(itemId);
    const itemPrice = item.price;

     const itemIndex = userId.cart.findIndex((el)=>itemId === el.id)
let updatUser;
     if(userId.cart[itemIndex].quantity > 0) {

         const updatedUser = await User.findOneAndUpdate(
             { _id: userId, 'cart.id': itemId },  // Query to find the user and the item in the cart
             { $inc: { 'cart.$.quantity': -1,'cart.$.total':-itemPrice } },  // Increment quantity
             { new: true }  // Return the updated document
           );
           updatUser = updatedUser;

     }
    
    res.status(200).json({
        status:'Success', 
        message: 'Cart updated successfully', 
        user: updatUser 
    });
})


exports.deleteItem=catchAsync(async(req,res,next)=>{


   


    const updatedUser = await User.findOneAndUpdate(
        { _id: req.user._id, 'cart.id': req.params.id },  // Query to find the user and the item in the cart
        { $set: { 'cart.$.isDelete':true} },  // Increment quantity
        { new: true }  // Return the updated document
      );
   
    res.status(200).json({
        status:'Success', 
        message: 'Cart updated successfully', 
        user: updatedUser
    });



})







