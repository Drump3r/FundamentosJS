var persona = {
    name: 'Andrea',
    apellido: 'Gallardo',
    edad: 21,
    peso: 40
}

console.log(`Al inicio del año ${persona.name} pesa ${persona.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANNIO = 365
const META = persona.peso - 3

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

var dias = 0

while (persona.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(persona)
    }
    if (realizaDeporte()) {
        adelgazar(persona)
    }
    dias++
}

console.log(`Pasaron ${dias} días hasta que ${persona.name} bajara de peso hasta ${META}kg`)