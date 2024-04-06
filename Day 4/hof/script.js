function sum(a,b,fun){ //in here the "sum function is declared and is also known as higher order function(hof)"
  const ans =  a+b;
  fun(ans);
}

function print(x){
  console.log('*******',x,'*********');
}
sum(3,4,print) // in this function "sum" the argument print is the call back function
