class Persona {
    constructor(nombre, apellido, altura) {
      this.nombre = nombre
      this.apellido = apellido
      this.altura = altura
    }
  
    saludar(fn) {
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)

      if (fn) {
          fn(this.nombre, this.apellido)
      }
    }
  
    soyAlto() {
      return this.altura > 1.8
    }
  }
  
  class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
      super(nombre, apellido, altura)
    }
  
    saludar(fn) {
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
        if (fn) {
          fn(this.nombre, this.apellido, true)
        }
    }
  }

  function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mirá, no sabia que eras desarrollador/a`)
    }
  }

  var brian = new Desarrollador ('Brian', 'Gallardo', 1.67)
  var kenny = new Persona ('Kenny', 'Aguilar', 1.50)

  brian.saludar(responderSaludo)
  kenny.saludar(responderSaludo)
