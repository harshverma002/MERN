// console.log('Hello');
// // var message='Hello world';
// // var age=18;
// // console.log(message);
// // console.log(age);

// // loosely typed
// // strictly typed

// // statically typed
// // dynamically typed



// function env(){
//  for(var i=0;i<5;i++){
//   console.log('--',i);
//  }
//  console.log(i);
// }
// env();

// const message='Hello!';
// console.log(message);

// let age=18;
// age=20;
// console.log(typeof(age));

// let arr=['a','b','c','d'];
// console.log(arr);

// let str="12";
// let age=20;
// let ans=20+12+'harsh';
// console.log(ans);


// let a='12';
// let b=12;
// if(a==b){
//   console.log('yes');
// }
// else{
//   console.log('No');
// }
// if(a===b){
//   console.log('yes');
// }
// else{
//   console.log('No');
// }


// let a=['a','b','c','d'];
// let cpy=[...a];
// console.log(a,cpy);
// if(a==cpy){
//   console.log('1.yes');
// }
// else{
//   console.log('1.No');
// }
// if(a===cpy){
//   console.log('2.yes');
// }
// else{
//   console.log('2.No');
// }

// const str= 'verma';
// const usrName= `My name is harsh ${str}`;
// console.log(usrName);

// function print(str = 'Nothing is here'){
//   console.log(str);
// }

// const s = 'Hello';
// print();

// function sum(a,b){
//   if(a && b){
//   console.log(a+b);
// }
// else if(a){
//   console.log(a);
//   }
//   else{
//     console.log(0);
//   }
// }
// sum(10);

// function sum(a=0,b=0){
//   console.log(a+b);
// }

// sum();
// sum(2);
// sum(2,3);

// print();
// a();
// b();

// function declaration
// function print(){
//   console.log('-----');
// }

// function assignment(named)
// const a = function print(){
//   console.log('-----');
// }

// function assignment(anonymous)
// const b= function(){
  // console.log('-----');
// }

// Arrow function assignment
// let b= ()=>{
  // console.log('-----');
// }

// print();
// a();
// b();


// let a=2;
// switch(a){
//   case 1:{
//     console.log('one');
//     break;
//   }
//   case 2:{
//     console.log('two');
//     break;
//   }
//   case 2:{
//     console.log('three');
//     break;
//   }
//   default:
//     console.log('not 1,2,3')
// }

// const obj= {
//  1:'one',
//  'fname':'harsh',
//  'lname':'verma',
//  12: 'twelve',
// }
// const fullName1=obj.fname+' ' +obj.lname;
// const fullName2=`${obj.fname} ${obj.lname}`;

// console.log(fullName1);
// console.log(fullName2);

const obj ={
  'fname':'harsh',
  'lname': 'verma',
  'age': 21,
  'address': 'Delhi',
};


const x = prompt('Please tell the property to know');
console.log(obj[x]);