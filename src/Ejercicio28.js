const CONTRASENA_CORRECTA = 'claveSegura'

let intentos = ['incorrecta', 'otra', 'claveSegura']
let indice = 0
let intento

do {

    intento = intentos[indice]
    console.log(`Intento: ${intento}`)

    if (intento === CONTRASENA_CORRECTA) {
        console.log("Acceso permitido")
    } else {
        console.log("Contraseña incorrecta")
    }

    indice++
} while (intento !== CONTRASENA_CORRECTA && indice < intentos.length)