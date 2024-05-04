// function sum(a, b){
//   console.log(a+b)
// }

const mul= function (a,b){
  console.log(a*b)
}

const sib = function (a,b){
  console.log(a-b)
}
console.log('Module 1....')
const name = 'Ajay'

module.exports = {
  fn1:mul,
  fn2:sib,
  'name':name,
}