const mongoose = require('mongoose');

const dProductSchema = new mongoose.Schema({
    id:Number,
    name:String,
    packSize:String,
    category:String,
    mrp:Number,
    image:String,
    status:String
   
})

module.exports = mongoose.model("DProduct",dProductSchema);