const mongoose = require("mongoose")
const reviewsSchema = mongoose.Schema({
  userId:{
    type:Number,
    unique:true,
    required:Number,
  },
  userName:{
    type:String,
    required:true,
  },
  Rating:String,
  images:[String],
  createdAt:{
    type:Date,
    default: new Date(),
  },
  updatedAt:{
    type:Date,
    default:new Date(),
  },
  
}) 

const reviewModel = mongoose.model('reviews',reviewsSchema)

module.exports = reviewModel