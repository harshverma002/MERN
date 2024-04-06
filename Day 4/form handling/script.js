 const firstNameChange = (e)=>{
 const vale = e.target.value;
 if(vale.length>3){
  console.log('Correct');
 }
 }
 const submitform=(e)=>{
  e.preventDefault();
  const t = e.target
  const res = {
    hobbies:[],
  };
  for(let i=0;i<t.length;i++){
    
    const ty = t[i].type
    if(ty!='submit'){
      const vl = t[i].value
      const nm = t[i].name

      if(ty=='checkbox' && t[i].checked){
        res.hobbies.push(vl);
      }
      if(ty!='checkbox'){
        res[nm]=vl;
      }
    }
  }
  console.log(res)
 }