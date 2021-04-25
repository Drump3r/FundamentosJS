var persona = {
    nombre: 'Sacha',
    apellido: 'Gallardo',
    edad: 28
}

function imprimirNombreEnMayusculas({nombre}) {
    
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(persona)