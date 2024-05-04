const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
  title:{
    type:String,
    unique:true,
    required:true,
  },
  price:{
    type:Number,
    required:Number,
  },
  description:String,
  images:[String],
  createdAt:{
    type:Date,
    default: new Date(),
  },
  updatedAt:{
    type:Date,
    default: new Date(),
  }
})

const productModel = mongoose.model('Products',productSchema)

// const testProduct = new productModel({
//   title:'Titan watch',
//   price:10000,
// })

// testProduct.save().then((res)=>{
//   console.log(res)
// })

module.exports = productModel          
 