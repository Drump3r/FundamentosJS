function persona (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

persona.prototype.soyAlto = function () {
    if (this.altura > ALTURA_PROMEDIO) {
        console.log(`${this.nombre} es alto`)
    } else {
        console.log(`${this.nombre} no es alto`)
    }
}

const ALTURA_PROMEDIO = 170 //cm

var brian = new persona('Brian', 'Gallardo', 167)

brian.soyAlto()

