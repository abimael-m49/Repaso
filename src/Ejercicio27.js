const NUMERO_SECRETO = 53
console.log(`El número secreto es: ${NUMERO_SECRETO}`)

let intento = 50
let intentosRealizados = 0

do {
    console.log(`Intento: ${intento}`)
    intentosRealizados++

    if (intento === NUMERO_SECRETO) {
        console.log("¡Adivinaste!")
    } else if (intento < NUMERO_SECRETO) {
        console.log("Demasiado bajo")
        intento += 5
    } else {
        console.log("Demasiado alto")
        intento -= 5
    }
} while (intento !== NUMERO_SECRETO)