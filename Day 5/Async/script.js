// let arr=[2,10,21,32];
// function printPretty(elem){
//   console.log(':',elem);
// }

// function printArray(arr){
//   for(let i=0;i<arr.length;i++){
//     printElem(arr[i]);
//   }
//   function printElem(elem){
//     console.log(':',elem);
//   }
//   arr.forEach((a, b, c)=>{
//     console.log(':',a, b, c)
//   });
// }

// printArray(arr);


// function printPretty(elem){
//     console.log(':',elem);
//     console.log('Hello')
//   }

// setTimeout(printPretty, 10000);

// console.log('GEC Start');

// function printPretty(){
//   console.log('prettyStart');
//   let ans=2+3;
//   console.log(ans);
//   console.log('prettyEnd');
// }

// setTimeout(printPretty, 10000);
// console.log('GEC End');

// const btn=document.getElementById('btn')
// btn.addEventListener("click",printPretty)



// console.log('Start')

// const fet=fetch("https://api.github.com/users/harshverma002");
// console.log(fet)
// fet.then(()=>console.log('Fetched'));
// console.log('End')

// console.log('Start')
//  const req = fetch('https://dummyjson.com/products/1')
//  const res = req.then(res=>res.json())
//  res.then((data)=>console.log(data))
// .then(res => res.json())
// .then(res => console.log(res))
// .then(json => console.log(json))
// console.log('End')


console.log('Start')
 const req = fetch('httpss://dummyjson.com/products/1')
 .then((res)=>res.json())
 .then((data)=>console.log(data))
 .catch((err)=>{
  console.log("Error occured")
 })
//  const res = req.then(res=>res.json())
//  res.then((data)=>console.log(data))