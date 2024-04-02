const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    id:Number,
    categoryName:String,
    description:String,
    status:String
})

module.exports = mongoose.model("Category",categorySchema);