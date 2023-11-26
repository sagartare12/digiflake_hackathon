const mongoose = require("mongoose")
const userModel = require("./user.model")

const cartSchema = new mongoose.Schema({
    
    itemsId:{
        type:[]
       
    },
    quantity:{
        type:Number,
        require:true
    },
    itemsPrice:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model("Cart",cartSchema);