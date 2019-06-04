import { combineReducers } from 'redux'
import { getPokemon } from './getPokemon';
import { hasErrored } from './hasErrored';
import { isLoading } from './isLoading'

export const rootReducer = combineReducers({
    pokemon: getPokemon,
    error: hasErrored,
    isloading: isLoading
})
export default rootReducer;