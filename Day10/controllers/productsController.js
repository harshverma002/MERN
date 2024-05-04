const fsPromises = require('fs/promises')


const getAllProducts = async(req, res)=>{
  // res.send("hello")
  // const data = fs.readFileSync('./data.json','utf-8');
  const data = await fsPromises.readFile('./data.json','utf-8');
  const arr = JSON.parse(data);
  res.json(
    {
      status:'success',
      results:arr.legth,
      data:{
        products:arr
      }
    }
  )
}

const addProduct = async (req, res)=>{
  // console.log(Object.keys(req))
  // console.log(req.body)
  const data = req.body
  if(!data.price || !data.title){
    res.json({
      status:'fail',
      message:'Title or price must be provided'
    })
  }
  else{
  const db = await fsPromises.readFile("./data.json")
  const arr = JSON.parse(db)
  const len = arr.length
  const newProduct = data
  if(len==0){
    newProduct.id = 1
    // data.id = 1
    // console.log(arr)
    // arr.push(data)
    // console.log(arr)
  }
  else{
    newProduct.id = (arr[len-1].id)+1
    // console.log(newProduct)
  }
  arr.push(newProduct)
  fsPromises.writeFile("./data.json",JSON.stringify(arr))
  // res.send('Work in progress')
  res.json({
    status:'success',
    results:1,
    data:{
      newProduct:newProduct,
    }
  })
}
}

const replaceProduct = async (req, res)=>{
  const arr = JSON.parse(await fsPromises.readFile("./data.json",'utf-8'))
  console.log(req)
  res.send("work in progress")
  const reqId = (req.params.id)
  const data = req.body
  data.id = reqId
  // console.log(data)
  const newArr = arr.map((elem)=>{
    if(elem.id==reqId)return data
    else return elem
  })
  fsPromises.writeFile('./data.json',JSON.stringify(newArr))
}

const deleteProduct = async (req, res)=>{
  const reqId = parseInt(req.params.id)
  const arr = JSON.parse(await fsPromises.readFile("./data.json","utf-8"))
  const newArr = arr.filter((elem)=>{
    if(elem.id === reqId)return false;
    else return true
  })
  fsPromises.writeFile("./data.json",JSON.stringify(newArr))
  res.status(204)
  res.json({
    status:'success',
    data:{
      newProduct:null,
    }
  })
}

module.exports = {
  getAllProducts,
  addProduct,
  replaceProduct,
  deleteProduct
}