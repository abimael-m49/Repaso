function esPar(numero) {

    return numero % 2 === 0
}

const resultado = esPar(7)
console.log(`¿El número 7 es par? ${resultado}`)


console.log(`¿El número 4 es par? ${esPar(4)}`)
console.log(`¿El número 15 es par? ${esPar(15)}`)