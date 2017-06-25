import React, { Component } from 'react';
import Deck from './Deck';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            matches: 0,
            turns: 0
        }
    }

    render() {
        const selected = this.state.selected;
        const matches = this.state.matches;
        const turns = this.state.turns;

        return (
            <main>
                <header>
                    <p>Cards selected: {selected}</p>
                    <p>Matches: {matches}</p>
                    <p>Turns: {turns}</p>
                </header>

                <Deck />
            </main>
        );
    }
}

export default App;
