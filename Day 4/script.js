// let a = new String("Hello");
// let b="Hello";
// if(a===b){
//   console.log("Yes");
// }
// else{
//   console.log("No");
// }

// const obj={
//   "name":"harsh",
//   "lname":"verma"
// }
// const str=JSON.stringify(obj);
// document.write(str);

// const obj={
//   "name":"harsh",
//   "lname":"verma"
// }
// obj.name=20;
// console.log(obj);

// let arr=[1,2,3];
// arr=[2,3,4];
// arr[20]=20;
// arr.push(10);
// console.log(arr);

// const obj={
//   "name":"harsh",
//   "lname":"verma"
// }


// const arr=[1,2,3,4];
// arr[2]=5;
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// function checkIfObject([1,2,3,4])

// function checkIfObject({"name":"ajay"})

// function checkIfObject(x){
//   if(Array.isArray(x)){
//     console.log("Not object");
//   }
//   else if(typeof(x)=="object"){
//     console.log("object");
//   }
//   else{
//     console.log("Not object");
//   }
// }

// checkIfObject(arr);



// const arr=['name',2];
// const obj={
//   'name':"ajay",age:20,1:'else'
// };
// for(let i of arr){
//   console.log(i);
// }
// for(let i of obj){
//   console.log(i);
// }

// for(let i in arr){
//   console.log(i);
// }
// for(let i in obj){
//   console.log(i);
// }


// console.log(window)
// console.log(window.innerHeight)
// console.log(window.innerWidth)

// console.dir(window.document)
// console.log(window.document)
// console.dir(window)
// console.log(console)

// const res=document.getElementsByTagName('h3')
// console.log(res)

// document.getElementById('h2').innerHTML=6+9
// const res=document.getElementById('p')
// console.dir(res)

// const res=document.querySelectorAll('h3');
// console.log(res);

const ne = document.createElement("h3");
ne.innerText="Dynamic Text"
console.log(ne)
document.body.appendChild(ne);

const firstDiv=document.getElementsByTagName('div')
firstDiv[0].appendChild(ne)
firstDiv[0].removeChild(ne)




