let num1 = 12
let num2 = 3
let operacion = '+'
let resultado

if (operacion === '+') {
    resultado = num1 + num2
} else if (operacion === '-') {
    resultado = num1 - num2
} else if (operacion === '*') {
    resultado = num1 * num2
} else if (operacion === '/') {
    resultado = num1 / num2
} else {
    resultado = "Operación no válida"
}

console.log("El resultado es: " + resultado)