import React, { Component } from 'react';
import './Card.css';

let UNICODE = {
    SPADES: '\u2660',
    HEARTS: '\u2665',
    CLUBS: '\u2663',
    DIAMONDS: '\u2666'
};

class Card extends Component {
    constructor(props) {
        super(props);

        this.flipCard = this.flipCard.bind(this);

        this.card = this.props.value;

        // this.state = this.state;
    }

    flipCard(e) {
        e.target.classList.toggle('face-down');
        e.target.classList.toggle('face-up');

        this.setState((prevState) => ({
            selected: prevState.selected++
        }));
    }

    render() {
        let symbol = null;
        let color = (['h', 'd'].indexOf(this.card.suit) !== -1)
            ? 'red'
            : 'black';

        switch (this.card.suit) {
            case 'h':
                symbol = UNICODE.HEARTS;
                break;
            case 's':
                symbol = UNICODE.SPADES;
                break;
            case 'd':
                symbol = UNICODE.DIAMONDS;
                break;
            case 'c':
                symbol = UNICODE.CLUBS;
                break;
            default:
                break;
        }

        let suit = <span className="suit">{symbol}</span>;

        return (
            <div className="card-container">
                <div className={"card face-down card--"+color} onClick={this.flipCard} onTouchEnd={this.flipCard}>
                    <div className="card__face card__face--front">
                        <span className="rank">{this.card.rank}</span>
                        {suit}
                    </div>
                    <div className="card__face card__face--back"></div>
                </div>
            </div>
        );
    }
}

export default Card;
