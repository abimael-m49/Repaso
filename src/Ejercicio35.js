const numeros = [1, 2, 3, 4, 5];

const invertido = []

for (let i = numeros.length - 1; i >= 0; i--) {

    invertido.push(numeros[i])
}


console.log("Arreglo original:", numeros)
console.log("Arreglo invertido:", invertido)