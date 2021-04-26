const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'

const bulbasaurUrl = `${API_URL}${POKEMON_URL.replace(':id', 1)}`
const opts = {crossDomain: true}

$.get(bulbasaurUrl, opts, function (pokemon) {
    console.log(`Has recivido un ${pokemon.name}`)
})
