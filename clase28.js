const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'
const opts = {crossDomain: true}


function obtenerPokemon(id, callback) {
    const pokeUrl = `${API_URL}${POKEMON_URL.replace(':id', id)}`
    //$.get(pokeUrl, opts, onPokemonResponse)
    fetch(pokeUrl)
    .then(function (res) {
        return res.json()
    })
    .then(function (pokemon) {
        console.log(`Has recivido un ${pokemon.name}`)
        if (callback) {
            callback()
        }
    })
    
}
obtenerPokemon(1, function () {
    obtenerPokemon(2, function () {
        obtenerPokemon(3)
    })    
})

