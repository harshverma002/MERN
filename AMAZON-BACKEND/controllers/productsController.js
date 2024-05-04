const productModel = require('../models/productsModel.js')


const getAllProducts =  async (req, res)=>{
  const {sort="price",page = 1,pageSize = 3,fields = '-price', ...q} = req.query;
  const sortStr = sort.split(',').join(' ')
  const fieldsStr = sort.split(',').join(' ')
  console.log(q, sort);
  let query =  productModel.find(q)
  query = query.sort(sortStr)
  const skip = pageSize*(page-1)
  // query = query.select('-images -updatedAt')
  query = query.select(fieldsStr)
  query = query.skip(skip).limit(pageSize)
  const products = await query
  const totalResults = await productModel.countDocuments()
  console.log(products)
  console.log(req.url)
  res.json({
    status:'success',
    results:products.length,
    totalResults,
    pageSize,
    page,
    data:{
      products:products,
    }
  })
}

const addProducts =  async(req,res)=>{
  try{
  const {_id, ...reqData} = req.body
  const data= await productModel.create(reqData)
  console.log(data)
  res.json({
    status:'success',
    result:1,
    data:{
      prducts:data,
    }
  }) 
}
catch(err){
  console.log(err)
  res.json({
    status:'failed',
    message:JSON.stringify(err),
  })
}
}

const replaceProduct = async(req,res)=>{
  try{
  const reqId = req.params.id
  const data = {...req.body,_id: reqId}
  const results = await productModel.findOneAndReplace({_id:reqId,},data)
  res.json({
    status:'success',
    data:{
      products:results,
    }
  })
}
catch(err){
  console.log(err)
  res.json({
    status:'failed',
    message:JSON.stringify(err),
  })
}
}

const deleteProduct = async(req,res)=>{
  try{
  const reqId = req.params.id
  const data = {...req.body,_id: reqId}
  const results = await productModel.findOneAndDelete({_id:reqId,},data)
  res.json({
    status:'success',
    data:{
      products:results,
    }
  })
}
catch(err){
  console.log(err)
  res.json({
    status:'failed',
    message:JSON.stringify(err),
  })
}
}


module.exports = {
  getAllProducts,
  addProducts,
  replaceProduct,
  deleteProduct,
}