const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'
const opts = {crossDomain: true}

const onPokemonResponse = function (pokemon) {
    console.log(`Has recivido un ${pokemon.name}`)
}
function obtenerPokemon(id) {
    const pokeUrl = `${API_URL}${POKEMON_URL.replace(':id', id)}`
    //$.get(pokeUrl, opts, onPokemonResponse)
    fetch(pokeUrl)
    .then(function (res) {
        return res.json()
    })
    .then(onPokemonResponse)
    
}
obtenerPokemon(1)
obtenerPokemon(2)
obtenerPokemon(3)