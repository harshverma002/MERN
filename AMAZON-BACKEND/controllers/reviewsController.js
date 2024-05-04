const reviewModel = require('../models/reviewsModel.js')


const addReviews =  async(req,res)=>{
  try{
    const reqId = req.params.id
  const {_id, ...reqData} = req.body
  const data= await reviewModel.create(reqData)
  console.log(data)
  res.json({
    status:'success',
    results:data.length,
    data:{
      user:data,
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

const updateReview = async(req, res)=>{
  try{
    const reqId = req.params.id
    const data = {...req.body,_id:reqId}
    const result = await reviewModel.findOneAndReplace({_id:reqId,},data)
    res.json({
      status:'success',
      data:{
        products:result,
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

const deleteReview = async(req, res)=>{
  try{
    const reqId = req.params.id
    const data = {...req.body,_id:reqId}
    const result = await reviewModel.findOneAndDelete({_id:reqId,},data)
    res.json({
      status:'success',
      data:{
        products:result,
      }
    })
  }
  catch(err){
    console.log(err)
    res.json({
      status:'failed',
      message:JSON.stringify(err)
    })
  }
}

module.exports={
      addReviews,
      updateReview,
      deleteReview,
}