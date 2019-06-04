export const isLoading = (state= true, action) =>{
    switch(action.type){
        case 'IS_LOADING':
            return action.message;
        default:
            return true;
    }

}