import React, {Component} from 'react';
import Block from './Block';
import Menu from './Menu';
import './Game.css'

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            board: this.generateNewGameBoard(),
            clicked: {
                one: null,
                two: null
            },
            disableClick: false,
        }
        this.onClickHandle = this.onClickHandle.bind(this);
        this.newGame = this.newGame.bind(this);
        this.backgroundColor = "#111";
    }

    onClickHandle(i){
        const clickedColors = {...this.state.clicked};
        if (this.state.disableClick || clickedColors.one === i || clickedColors.two === i) return;
        if (clickedColors.one === null){
            clickedColors.one = i;
        } else if (clickedColors.two === null){
            clickedColors.two = i;
        }
        if (clickedColors.one !== null && clickedColors.two !== null){
            const colorBoard = this.state.board.slice();
            if (colorBoard[clickedColors.one] === colorBoard[clickedColors.two]){
                colorBoard[clickedColors.one] = this.backgroundColor;
                colorBoard[clickedColors.two] = this.backgroundColor;
            }
            this.setState({disableClick: true})
            setTimeout(()=>{
                clickedColors.one = null;
                clickedColors.two = null;
                this.setState({
                    clicked: clickedColors,
                    disableClick: false,
                    board: colorBoard,
                }, this.checkWin);
            }, 1000);
        }
        this.setState({clicked: clickedColors});
    }

    newGame(){
        const board = this.generateNewGameBoard();
        const clicked = {
            one: null,
            two: null
        };
        const disableClick = false
        this.setState({
            board,
            clicked,
            disableClick
        });
    }

    checkWin(){
        if (this.state.board.every(e => (e === this.backgroundColor))){
            this.newGame();
        }
    }

    generateNewGameBoard(){
        const colors = ['red', 'navy', 'green', 'yellow', 'purple', 'pink', 'lightskyblue', 'white'];
        const colorArray = [];
        colors.forEach (color => {
            colorArray.push(color);
            colorArray.push(color);
        });
        const generatedBoard = [];
        while (colorArray.length !== 0){
            const randomColor = Math.floor(Math.random()*colorArray.length);
            generatedBoard.push(...colorArray.splice(randomColor,1));
        }
        return generatedBoard;
    }

    render(){

        const board = this.state.board.map((color, i) => 
            (this.state.clicked.one === i || this.state.clicked.two === i || color === this.backgroundColor)
                ?<Block color={color} key={i} onclick={this.onClickHandle.bind(this, i)} />
                :<Block color="#444" key={i} onclick={this.onClickHandle.bind(this, i)} />
        );

        return (
            <React.Fragment>
                <Menu restart={this.newGame} />
                <div style={{'backgroundColor':this.backgroundColor}} className="gameContainerStyle">
                    {board}
                </div>
            </React.Fragment>
        )
    }

}

export default Game;