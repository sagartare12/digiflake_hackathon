const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please provide password'],
        minlength:8
    },
   
    confirmPassword:String,
    image:String,
    createdAt:{
        type:Date,
        immutable:true,
        default:()=> {
            return Date.now();
        }
    },
    updatedAt:{
        type:Date,
        default:()=> {
            return Date.now();
        }
    }
})

module.exports = mongoose.model("User",userSchema);