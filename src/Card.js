import React from 'react';
import './App.css';


export const Card = ({pokemon}) =>{
    return (
        <div className="card">
            <h2>{pokemon.name}</h2>
            <h4>Weight: {pokemon.weight}</h4>
            <img src={pokemon.sprites.front_default} alt='pokemon front view'/>  
        </div>
    )

}

export default Card;

    

