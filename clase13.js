var persona = {
    name: 'Andrea',
    apellido: 'Gallardo',
    edad: 21,
    peso: 40
}

console.log(`Al inicio del año ${persona.name} pesa ${persona.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANNIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (let i = 1; i <= 365; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(persona)
    }  else if (random < 0.5) {
        adelgazar(persona)
    }

}

console.log(`Al final del año ${persona.name} pesa ${persona.peso.toFixed(1)}kg`)