const form = document.getElementById("form")
const email = document.getElementById("email")
const error = document.getElementById("error")

form.addEventListener("submit",function(e){

e.preventDefault()

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!regex.test(email.value)){

error.style.display="block"
email.style.border="2px solid hsl(0,93%,68%)"

}else{

error.style.display="none"
email.style.border="none"

alert("Email enviado!")

}

})