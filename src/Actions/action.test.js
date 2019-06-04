import * as actions from './index'


describe('Action tests', () => {
    describe('gatherPokemon', () =>{
        it('it returns an object with an array of pokemon and a type of "GOT_POKEMON" ', () =>{
            let expected = {type: 'GOT_POKEMON', pokemon:[{id: "pikachu"},{id: "bulbasaur"}]}
            let result = actions.gatherPokemon([{id: "pikachu"},{id: "bulbasaur"}])
            expect(expected).toEqual(result)
        })
    })
    describe('gatherPokemon', () =>{
        it('it returns an object with an messag eand a type of "HAS_ERRORED" ', () =>{
            let expected = {type: 'HAS_ERRORED', message:'An error has occured'}
            let result = actions.anError('An error has occured')
            expect(expected).toEqual(result)
        })
    })
    describe('gatherPokemon', () =>{
        it('it returns an object with a boolean and a type of "IS_LOADING" ', () =>{
            let expected = {type: 'IS_LOADING', message: true}
            let result = actions.loading(true)
            expect(expected).toEqual(result)
        })
    })
})