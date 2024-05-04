// const fs = require('fs')

// const data = fs.readFileSync('./myReadMe.txt','utf-8');
// console.log(data);
// console.log(data.toString());


// const fs = require('fs')
// fs.writeFileSync('./logs.txt',"10th April 2024: Day 7")



// const fs = require('fs')
// console.log("Start")
// const data = fs.readFileSync('./myReadMe.txt','utf-8');
// console.log(data);
// console.log("End")

//promises in file system
// console.log("Start")
// const fsPromises = require('fs/promises')
// const pr = fsPromises.readFile('./myReadMe.txt',{encoding:'utf8'})
// console.log(pr)
// pr.then((res)=>{
//   console.log(res)
// })
// console.log("End")



//call back in file system
// const fs = require('fs')
// const data  = fs.readFile('./myReadMe.txt','utf8',(err,data)=>{
//   console.log(data)
// })





// const http = require('http')

// const app = http.createServer((req, res)=>{
//   console.log('Request received')
//   // console.log(Object.keys(req))
//   console.log(req.url)
//   res.writeHead(200,{
//     'content-type':'text/html'
//   })
//   res.end()
// })

// app.listen(1400,(()=>{
//   console.log('..........Server started.................')
// }))

//mini project
const http = require('http')
const fs = require('fs')

const data = fs.readFileSync('./data.json','utf-8')
const dataObj = JSON.parse(data)
console.log(dataObj)
const products = dataObj.products

// console.log(typeof(dataObj))

const htmlTemplate = fs.readFileSync('./page.html',{encoding:'utf-8'})
const cardTemplate = fs.readFileSync('./card.html','utf-8')

// const products = JSON.parse(data).products


// const card1 = cardTemplate.replace('_TITLE_',products[0].title).replace('_INFO_',products[0].description)
// const card2 = cardTemplate.replace('_TITLE_',products[1].title).replace('_INFO_',products[1].description)
// const card3 = cardTemplate.replace('_TITLE_',products[2].title).replace('_INFO_',products[2].description)
// const allCards = card1+card2+card3
                    
const allCards = products.map((elem)=>{
  let newCard = cardTemplate;
  newCard = newCard.replace('_TITLE_',elem.title)
  newCard = newCard.replace('_IMG_',elem.images[0])
  newCard = newCard.replace('_INFO_',elem.description)
  newCard = newCard.replace('rating',elem.title)
  newCard = newCard.replace('rating',elem.rating)
  
  return newCard
})
const allCardsString = allCards.join(' ');



const page =  htmlTemplate.replace('_PRODUCTS_CARDS_',allCardsString)

const app = http.createServer((req, res)=>{
  console.log('Request received')
  console.log(Object.keys(req))
  console.log(req.url)
  res.writeHead(200,{
    'content-type':'text/html'
  })
  // res.end(page)
  res.end(allCardsString)
})

app.listen(1400,()=>{
  console.log('..........Server started.................')
})


 