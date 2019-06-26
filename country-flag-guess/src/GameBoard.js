import React, { Component } from 'react';
import CountryOption from './CountryOption';
import './GameBoard.css';

class GameBoard extends Component {

    constructor(props){
        super(props);
        this.state = {
            country_list: [],
            puzzle_countries: [],
            answer: "",
            flag: "",
            answered: "",
        }
        this.userAnswered = this.userAnswered.bind(this);
        this.generateNewGame = this.generateNewGame.bind(this);
    }

    componentDidMount(){
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(res => {
                const country_list = res.map(c => ({name: c.name, flag: c.flag}))
                this.setState({country_list}, this.generateNewGame)
            });
    }

    generateNewGame(){
        const puzzle_countries_indexes = [];
        const answer_index = Math.floor(Math.random()*4);
        let flag = "";
        let answer = "";
        const puzzle_countries= [];
        for (let i=0; i<4 ;i++){
            let nextCountry = null;
            while (puzzle_countries_indexes.indexOf(nextCountry) > -1 || nextCountry === null)
                nextCountry = Math.floor(Math.random() * this.state.country_list.length);
            puzzle_countries_indexes.push(nextCountry);
            puzzle_countries.push(this.state.country_list[nextCountry].name);
            if (i === answer_index) {
                flag = this.state.country_list[nextCountry].flag;
                answer = this.state.country_list[nextCountry].name;
            }
        }
        this.setState({
            answer,
            flag,
            puzzle_countries,
            answered: ""
        });
    }

    userAnswered(ans){
        if (this.state.answered !== "") return;
        this.setState({
            answered: ans,
        });
        setTimeout(this.generateNewGame, 3000);
    }

    render(){
        if (this.state.country_list.length === 0)
            return (<div class="loading">LOADING</div>)
        
        const countryOptions = this.state.puzzle_countries.map((ele, index)=>(
            <CountryOption 
                country={ele} 
                key={index}
                thisIsAnswer= {this.state.answer === ele}
                correct={this.state.answered === this.state.answer}
                answered={this.state.answered}
                click={this.userAnswered}
            />
        ));

        return(
            <div className="style_board">
                <div className="imageContainer">
                    <img src={this.state.flag} alt="flag" />
                </div>
                <div className="options_container">
                    {countryOptions}
                </div>
            </div>
        )
    }


}

export default GameBoard;