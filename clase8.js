function persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
var persona1 = new persona('Sacha', 'lifszyc', 28)
var persona2 = new persona('daniel', 'mendoza', 26)

function cumpleannios(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

var personaNueva = cumpleannios(persona1);

console.log(personaNueva)