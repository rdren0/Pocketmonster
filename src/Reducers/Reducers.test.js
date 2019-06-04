import { isLoading } from './isLoading';
import { hasErrored } from './hasErrored';
import { getPokemon } from './getPokemon';
import * as actions from '../Actions/index'


describe('Reducer Tests', () =>{
    describe('isLoading', () =>{
        it('should return inital state', () =>{
            const expected =  true;
            const result = isLoading(undefined, '')
            expect(expected).toEqual(result)
        })
        it('should return the state of false when the case is "IS_LOADING"', () =>{
            const expected = false;
            const result = isLoading(undefined, actions.loading(false))
            expect(expected).toEqual(result)
        })
    })
    describe('hasErrored', () =>{
        it('should return inital state', () =>{
            const expected =  false;
            const result = hasErrored(undefined, '')
            expect(expected).toEqual(result)
        })
        it('should return the state of true when the case is "HAS_ERRORED"', () =>{
            const expected = true;
            const result = hasErrored(undefined, actions.anError(true))
            expect(expected).toEqual(result)
        })
    })
    describe('getPokemon', () =>{
        it('should return inital state', () =>{
            const expected =  [];
            const result = getPokemon(undefined, '')
            expect(expected).toEqual(result)
        })
        it('should return the an array of pokemon when case is "GOT_POKEMON"', () =>{
            const expected = {pokemon:[{id: "pikachu"}, {id: "bulbasaur"}]};
            const result = getPokemon(undefined, actions.gatherPokemon({pokemon:[{id: "pikachu"}, {id: "bulbasaur"}]}))
            expect(expected).toEqual(result)
        })
    })

})