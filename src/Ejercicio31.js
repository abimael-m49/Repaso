const numeros = [2, 7, 10, 15, 22, 33]

let cantidadPares = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        cantidadPares++
    }
}

console.log("La cantidad de números pares es:", cantidadPares)