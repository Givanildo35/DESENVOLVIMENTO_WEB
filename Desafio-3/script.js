function calculateAge(){

let day=document.getElementById("day").value
let month=document.getElementById("month").value
let year=document.getElementById("year").value

let today=new Date()

let birthDate=new Date(year,month-1,day)

if(!day || !month || !year){

alert("Preencha todos os campos")

return

}

let years=today.getFullYear()-birthDate.getFullYear()
let months=today.getMonth()-birthDate.getMonth()
let days=today.getDate()-birthDate.getDate()

if(days<0){

months--
days+=30

}

if(months<0){

years--
months+=12

}

document.getElementById("years").innerText=years
document.getElementById("months").innerText=months
document.getElementById("days").innerText=days

}