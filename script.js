const temperatura =document.getElementById("temperatura")
const button = document.getElementById("button")
const resultado = document.getElementById("resultado")
const temperaturas = document.getElementById("temperaturas")
function converterTemperatura(){

const number = parseFloat(temperatura.value);
let temp = number
let formula;
if (temperaturas.value=== "fahrenheit"){
formula = (temp * 9/5) + 32;
resultado.innerText = "Resultado = " + formula.toFixed(2) + "°F"
}
else {
    formula = (temp-32)*5/9
    resultado.innerText = "Resultado = " + formula.toFixed(2) + "°C"
}
console.log(temperaturas.value)
console.log(temperaturas.value)
}
