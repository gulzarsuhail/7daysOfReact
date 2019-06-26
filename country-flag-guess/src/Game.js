import React, { Component } from 'react';
import Menu from './Menu';
import GameBoard from './GameBoard';

class Game extends Component {
    render(){
        return (
            <React.Fragment>
                <Menu />
                <GameBoard />
            </React.Fragment>
        )
    }

}

export default Game;