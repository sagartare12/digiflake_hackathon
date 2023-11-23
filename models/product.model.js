const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    category:String,
    productImage:String,
    price:String,
    description:String,
    createdAt:{
        type:Date,
        default:()=> {
            return  Date.now()
        }
    }
})

module.exports = mongoose.model("Product",productSchema)