import React, { Component } from 'react';
import './App.css';
import Container from './Container';
import { connect } from 'react-redux'
import { gatherPokemon, anError, loading } from './Actions';


class App extends Component {
 constructor(){
   super();
   this.state=({
     pokemon: []
   })
 }
 componentDidMount = () =>{
  this.props.loading(true)
  this.props.anError(false)
   this.fetchCall()
   .then(result => this.props.gatherPokemon(result))
   this.props.loading(false)

  }

 fetchCall = async () =>{
   const response = await fetch("http://localhost:3001/pokemon")
   if(!response.ok){
     this.props.hasErrored(true)
    throw new Error('Unable to fetch pokemon')
   }
   return await response.json()
  }

 
 
 
  render() {
    let contents;
    if(this.props.isloading){
      contents = <img src='https://66.media.tumblr.com/c99a579db3ae0fc164bf4cca148885d3/tumblr_mjgv8kEuMg1s87n79o1_400.gif' alt="Pikachu running"/> }
    if(this.props.pocketmonsters.length){
      contents = <Container pokemon = {this.props.pocketmonsters}/>;
    }
    console.log(this.props)
    return (
      <div>
      <h1>Pokemon</h1>
      {contents}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  pocketmonsters: state.pokemon,
  isLoading: state.isLoading,
  error: state.error

})

export const mapDispatchToProps = (dispatch) => ({
gatherPokemon: animals => dispatch(gatherPokemon(animals)),
anError: message => dispatch(anError(message)),
loading: message => dispatch(loading(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


