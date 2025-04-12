function sumarArreglo(arreglo) {
    let suma = 0
    
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i]
    }
    
    return suma
}

function iniciarPrograma() {
    const numeros = []
    let continuar = true
    
    while (continuar) {
        const entrada = prompt("Ingresa un número:")
        const numero = parseFloat(entrada)
        
        if (!isNaN(numero)) {
            numeros.push(numero)
            
            const respuesta = prompt("¿Deseas ingresar otro número? (si/no)").toLowerCase()
            if (respuesta !== 'si' && respuesta !== 'sí' && respuesta !== 's') {
                continuar = false
            }
        } else {
            alert("Por favor, ingresa un número válido.")
        }
    }
    
    const resultado = sumarArreglo(numeros)
    alert(`Los números ingresados son: [${numeros.join(', ')}]\nLa suma total es: ${resultado}`)
}


const ejemplo = [10, 20, 30, 40]
console.log(`Suma del arreglo de ejemplo [${ejemplo}]: ${sumarArreglo(ejemplo)}`)