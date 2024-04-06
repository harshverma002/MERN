const res=document.querySelector('div');
// console.log(res);
// res.remove();
const c=document.querySelector('p:nth-of-type(2)');
res.removeChild(c);

function getInfo(e){
  console.log(e);
  // const d=document.querySelector("div")
  // const el = document.createElement(p)
  // d.append("my name is harsh verma");
  e.target.class='abc';
  // e.target.setAttribute('style','color:white');
  // e.target.setAttribute('style','background-color:red');
  e.target.style.backgroundColor="green"
  e.target.style.color="red"

}


