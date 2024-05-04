const fs = require("fs")
const http = require("http")
const url = require('url')
const data = fs.readFileSync("./data.json")
const dataObj = JSON.parse(data).products
const inputElement =`<form action='/product'>
<input type="text" name="productName">
<button type="submit">search</button>
</form>`

const cardTemplate = `
<head>
<style>
body{
  background-color:white;
}
.product-card{
  text-align:center;
  background-color:black;
  color:white;
  margin: 10px 25%
}
a{
  text-decoration:none;
  color:white;
  font-size:24px;
}
</style>
</head>
<div class = 'product-card'>
<h1>$TITLE$</h1>
<img src="$tag$" alt='product-image'><br>
<a href="info">Buy</a>
<h3>${`Amount: `}Price</h3>
<h3>${`Rating: `}rating</h3>
<h3>${`Quantity: `}stock</h3>
</div>`;

let result = [];
for(let i=0;i<dataObj.length;i++){
  let temp = cardTemplate
  temp = temp.replace('$TITLE$',dataObj[i].title)
  temp = temp.replace('$tag$',dataObj[i].images[0])
  temp = temp.replace('info',`/product?id=${i}`)
  // temp = temp.replace('desc',dataObj[i].description)
  temp = temp.replace('Price',dataObj[i].price)
  temp = temp.replace('rating',dataObj[i].rating)
  temp = temp.replace('stock',dataObj[i].stock)
  result.push(temp);
}


result = result.join(' ')
console.log(result)
const server = http.createServer((req,res)=>{
  res.writeHead(200,{
    'content-type':'text/html'
  })
  // const route = req.url
  // console.log(routepatthname
  // const pathname = path.pathname
  const path = url.parse(req.url)
  const {pathname,query} = url.parse(req.url,true)
  console.log(query)
  if(pathname=='/home'){
    res.end(inputElement+result)
  }
  else if(pathname=='/product'){
    const id = query.id
    // console.log(dataObj[id])
    
    const pName = query.productName;
    // if(id){
    //   const item = dataObj[id]
    //   res.end(`
    //   <head>
    //   <style>
    //   *{
    //     margin:0;
    //     padding;0;
    //   }
    //     .details{
    //       background-color:yellow;
    //       text-align:center;
    //       margin: 0px 25%;
    //     }
    //     img{
    //       border-radius:50px;
    //     }
    //     a{
    //       text-decoration:none;
    //       padding: 1px 2px;
    //     }
    //   </style>
    //   </head>
    //   <div class="details">
    //     <h2>${item.brand}</h2>
    //     <img src="${item.images[0]}">
    //     <h2><b>${item.title}</b></h2>
    //     <h3>Description: ${item.description}</h3>
    //     <h3>Price: ${item.price}</h3>
    //     <h3>Rating: ${item.rating}</h3>
    //     <h3>Stock: ${item.stock}</h3>
    //     <button><a href="http://localhost:1400/home">Home</a></button>
    //   </div>
    // `)
    // }
    //  else
     if(pName){
      const searchName = dataObj.filter((elem)=>{
        if(elem.title.includes(pName)){
          return true;
        }
        else {
          return false;
        }
      })
      // console.log(searchName)
      res.end(JSON.stringify(searchName))
    }
    else{
      res.end('<h3>Error...<h3>')
    }
   
    
  }
  else{
    res.end('404.... Not found')
  }
  //  res.end(result)
 })
 server.listen(1400)