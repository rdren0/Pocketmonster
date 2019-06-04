export const hasErrored = (state= false, action) =>{
    switch(action.type){
        case 'HAS_ERRORED':
            return action.message
        default:
            return state;

    }
}