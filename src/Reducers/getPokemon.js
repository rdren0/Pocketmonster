export const getPokemon = (state = [], action) => {
    switch(action.type){
        case "GOT_POKEMON":
            return action.pokemon;
            default:
                return state;

    }
}