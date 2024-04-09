function fetchAPI(){
  const url='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=us&key=BBWKYNL6MVPXBU9A8EQBM8YNH'
  fetch(url)
   .then((Response)=>{
       // console.log(Response)
       return Response.json()
   }).then((val)=>{
       renderUI(val)
   })
}


fetchAPI()


const root=document.getElementById("root")

function renderUI(data){
   const days=data.days
   // console.log(days)
   const row= document.createElement("tr")
   let cell=document.createElement("th")
   cell.innerText="date"
   row.append(cell)

   cell=document.createElement("th")
   cell.innerText="maximum temperature"
   row.append(cell);
   
   cell=document.createElement("th")
   cell.innerText="minimum temperature"
   row.append(cell);


   cell=document.createElement("th")
   cell.innerText="average temperature"
   row.append(cell);

   root.append(row)


   // now make table body


   for(let i=0;i<days.length;i++){
   const childrow=document.createElement("tr")
    const c1=document.createElement("td")
    c1.innerText=days[i].datetime
    childrow.append(c1)
    
    const c2=document.createElement("td")
    c2.innerText=days[i].tempmax
    childrow.append(c2)

    const c3=document.createElement("td")
    c3.innerText=days[i].tempmin
    childrow.append(c3)

    const c4=document.createElement("td")
    c4.innerText=days[i].temp
    childrow.append(c4)  


    root.append(childrow);
}
}
