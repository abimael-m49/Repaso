let opciones = ["A", "B", "3"]; 
let indice = 0;

do {

    let opcion = opciones[indice];
    console.log("Menú:");
    console.log("A - Bienvenida simple");
    console.log("B - Bienvenida con nombre");
    console.log("3 - Salir");
    console.log("Opción seleccionada: " + opcion);

    switch (opcion) {
        case "A":
            console.log("Bienvenid@");
            break;
        case "B":
            let nombreIngresado = "Ana"; 
            console.log("Bienvenid@ " + nombreIngresado);
            break;
        case "3":
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida");
    }

    indice++; 
} while (opcion !== "3" && indice < opciones.length);