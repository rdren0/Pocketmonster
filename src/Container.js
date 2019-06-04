import React, { Component } from 'react';
import Card from './Card';
import './App.css';

export class Container extends Component {
    
    render() {
        console.log(this.props)
        let cards = this.props.pokemon.map( card =>{
            console.log(card)
                return <Card pokemon={card} key={card.id} />
            })
        
        
        return (
            <div className="container">
            {cards}
            </div>
        )
    }
}

export default Container;