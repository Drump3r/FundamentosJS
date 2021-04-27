const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'
//const opts = {crossDomain: true}


function obtenerPokemon(id) {
    return new Promise((resolve, reject) => {
        const pokeUrl = `${API_URL}${POKEMON_URL.replace(':id', id)}`
        fetch(pokeUrl)
        .then((res) => res.json())
        .then(function (pokemon) {
            console.log(`Has recivido un ${pokemon.name}`)
            resolve(pokemon)
        }).catch(() => reject(id))
    })
    //$.get(pokeUrl, opts, onPokemonResponse)
    
    
}

function onError(id) {
    console.log(`Sucedió un error al obtener el pokemón ${id}`)
}
var ids = []
for (let i = 1; i <= 151; i++) {
    ids.push = i
}
 

var promesas = ids.map(id => obtenerPokemon(id))

Promise
    .all(promesas)
    .then(pokemons => console.log(pokemons))
    .catch(onError)


// obtenerPokemon(1)
//     .then(function (pokemon){
//         return obtenerPokemon(2)
//     })
//     .then(function (pokemon) {
//        return obtenerPokemon(3)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(4)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(5)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(6)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(7)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(8)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(9)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(10)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(11)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(12)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(13)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(14)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(15)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(16)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(17)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(18)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(19)
//     })
//     .then(function (pokemon) {
//         return obtenerPokemon(20)
//     }).catch(onError)
