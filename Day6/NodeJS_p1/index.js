// const figlet = require("figlet");

// figlet('Jay Bhawani!',(err,data)=>{
//   console.log(data)
// })


// old method
// fetch('https://api.github.com/users/deepak3440').then((res)=>{
//   return res.json()
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log('Error occured!')
// })
// console.log('End')

//async wait
console.log('start')
async function getAPI(){
  console.log('api calling...')
  const pr =  await fetch('https://api.github.com/users/deepak3440')
  console.log('making json')
  const data = await pr.json()
  console.log('::fetched data::')
}

getAPI()
console.log('end')