let tipPercent = 0;

const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const customTip = document.getElementById("customTip");

const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");

const error = document.getElementById("error");
const resetBtn = document.getElementById("reset");

const tipButtons = document.querySelectorAll("[data-tip]");


// selecionar porcentagem pelos botões
tipButtons.forEach(button => {

button.addEventListener("click", () => {

tipPercent = Number(button.dataset.tip);

customTip.value = "";

calculate();

});

});


// porcentagem customizada
customTip.addEventListener("input", () => {

tipPercent = Number(customTip.value);

calculate();

});


// recalcular quando mudar valores
billInput.addEventListener("input", calculate);
peopleInput.addEventListener("input", calculate);


function calculate(){

const bill = Number(billInput.value);
const people = Number(peopleInput.value);

if(people === 0){

error.style.display = "block";
return;

}else{

error.style.display = "none";

}

if(!bill || !people || !tipPercent){
return;
}

const tipTotal = bill * (tipPercent / 100);

const tipPerPerson = tipTotal / people;

const totalPerPerson = (bill + tipTotal) / people;


tipAmount.textContent = "R$" + tipPerPerson.toFixed(2);

totalAmount.textContent = "R$" + totalPerPerson.toFixed(2);

}


// botão reset
resetBtn.addEventListener("click", () => {

billInput.value = "";
peopleInput.value = "";
customTip.value = "";

tipAmount.textContent = "R$0.00";
totalAmount.textContent = "R$0.00";

tipPercent = 0;

error.style.display = "none";

});