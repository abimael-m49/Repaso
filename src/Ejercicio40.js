function validarCorreo(correo) {

    if (correo.includes("@") && correo.includes(".")) {
        return "Correo válido"
    } else {
        return "Correo inválido"
    }
}

function pedirCorreo() {
    const correoUsuario = prompt("Ingresa tu correo electrónico:")
    
    if (correoUsuario) {
        const resultado = validarCorreo(correoUsuario)
        alert(resultado)
    } else {
        alert("No ingresaste ningún correo.")
    }
}



console.log(validarCorreo("usuario@dominio.com"))
console.log(validarCorreo("usuariodominio.com"))
console.log(validarCorreo("usuario@dominio"))