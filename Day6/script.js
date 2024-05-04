// setTimeout(()=>{console.log('Timeout1...')},20000)
// console.log('Start')
// setTimeout(()=>{console.log('Timeout2...')},5000)
// console.log('Intermediate')
// console.log('End')

// function createOrder(){
//   console.log(x)
//   setTimeout(()=>{fn('Likh123')},1000)
// }

// function makePayment(orderID){

  // console.log(orderID)
// }
// createOrder('saop',makePayment)

// const pr = new Promise((resolve,reject)=>{
  
  // setTimeout(()=>{resolve("done-123")},5000)
  // setTimeout(()=>{reject("some times are out of stock")},0)
  
// })
// setTimeout(()=>{console.log('First timeout....')},0)
// console.log(pr)
// pr.then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })



setTimeout(function abc(){
  console.log('I am one')
},0)

const pr = new Promise((res,rej)=>{
  setTimeout(()=>{res('done')},0)
})

pr.then(function b(res){
  console.log("promise completed: ",res)
})

setTimeout(function xyz(){
  console.log('I am two')
},0)


