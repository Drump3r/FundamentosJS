function persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

function imprimirNombreYEdad({nombre, edad}) {
    console.log(`Hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años`)
}

var sasha = new persona('Sacha', 'lifszyc', 28)
var daniel = new persona('daniel', 'mendoza', 26)

imprimirNombreYEdad(sasha)

imprimirNombreYEdad(daniel)