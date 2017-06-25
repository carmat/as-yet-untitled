import React, { Component } from 'react';
import Card from './Card';
import './Deck.css';

const deck = [
    { id: '4h', rank: '4', suit: 'h' },
    { id: '10d', rank: '10', suit: 'd' },
    { id: 'ks', rank: 'k', suit: 's' },
    { id: 'ac', rank: 'a', suit: 'c' }
];

class Deck extends Component {
    constructor(props) {
        super(props);

        this.resetCards = this.resetCards.bind(this);
    }

    resetCards() {
        const cards = document.querySelectorAll('.face-up');

        cards.forEach((card) => {
            setTimeout(() => {
                card.classList.toggle('face-down');
                card.classList.toggle('face-up');
            }, 1500);
        });

        this.setState({ selected: 0 });
    }

    render() {
        return (
            <div className="deck">
                {deck.map((card) =>
                    <Card key={card.id} value={card} />
                )}
            </div>
        );
    }
}

export default Deck;
