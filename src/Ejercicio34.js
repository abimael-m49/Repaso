const notas = [
    [80, 90, 100],
    [70, 60, 75],  
    [88, 95, 92],  
]


const promedios = []


for (let i = 0; i < notas.length; i++) {

    let suma = 0
    

    for (let j = 0; j < notas[i].length; j++) {
        suma += notas[i][j]
    }
    

    const promedio = suma / notas[i].length
    promedios.push(promedio)
    

    console.log(`Estudiante ${i + 1}: Promedio = ${promedio}`)
}


console.log("Lista de promedios:", promedios)