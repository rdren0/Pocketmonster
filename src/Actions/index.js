export const gatherPokemon = (pokemon) => ({
    type: "GOT_POKEMON",
    pokemon
    
})

export const anError = (message) => ({
    type: 'HAS_ERRORED',
    message
})

export const loading = (message) =>({
    type: 'IS_LOADING',
    message
})