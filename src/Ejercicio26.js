const numeros = [10, 15, 20, 25, 30, 5];
let suma = 0
let indice = 0
let numerosUsados = 0

while (suma < 100 && indice < numeros.length) {
    suma += numeros[indice];
    numerosUsados++
    indice++
}

console.log("La suma es: " + suma)
console.log("Números usados: " + numerosUsados)