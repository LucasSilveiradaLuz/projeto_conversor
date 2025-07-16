const graus =document.getElementById("graus")
const button = document.getElementById("button")
const resultado = document.getElementById("resultado")
const temperaturas = document.getElementById("temperaturas")
function converterTemperatura(){

const number = parseFloat(graus.value);
let temp = number
let formula;
if (temperaturas.value=== "fahrenheit"){
formula = (temp * 9/5) + 32;
resultado.innerText = "Resultado = " + formula.toFixed(1) + "°F"

}
else {
    formula = (temp-32)*5/9
    resultado.innerText = "Resultado = " + formula.toFixed(1) + "°C"
  
}

}
