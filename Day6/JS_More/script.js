// console.log('Hello')
//  const arr = [10,22,34]
//  const ans = arr.map((a)=>{
//   console.log(a)
//   return a
//  })
//  const ans2 = arr.map(a=>a*2)
//  console.log(ans)
//  console.log(ans2)

//  const arr2 = [10.11,22.32,34.76]
//  const ans3 = arr.map(a=>parseInt(a))
//  console.log(ans3)

// const arr = [10,22,34]
// const ans = arr.filter((a)=>{
//   if(a>20)return true
//   else return false
// })
// console.log(ans)

// const arr = [
//   'Delhi-India',
//   'Mumbai-India',
//   'Chennai-India',
//   'Bejing-China',
//   'Texas-USA',
// ] 

// const ans = arr.filter((a)=>{
//   if(a.includes('i')|| a.includes('I')){
//     return true
//   }
//   else false
// })
// console.log(ans)


// const ans = arr.filter((a)=>{
//   const ns = a.toLowerCase()
//   if(ns.includes('india')){
//     return true
//   }
//   else{
//     return false
//   }
// })
// console.log(ans)

// const ans2 = arr.filter((a)=>a.toLowerCase().includes('india'))
// console.log(ans2)



const arr = [10,22,34,50]
const ans = arr.reduce((a,b,c,d)=>{
  console.log(a,b,c,d)
  return a+b
})
console.log(ans)

const arr1 = ['ab','cd','xy','yz']
const ans1 = arr1.reduce((a,b,c,d)=>{
  console.log(a,b,c,d)
  return a+b
})
console.log(ans1)