import React from 'react';
import './CountryOption.css';

const CountryOption = ({country, click, thisIsAnswer, correct, answered}) => {
    let buttonStyle = "";
    if (answered){
        if (thisIsAnswer){
            buttonStyle = "correct";
        } else if (answered === country){
            buttonStyle = "wrong";
        }
    }

    return (
        <span onClick={click.bind(this, country)} className={"button "+buttonStyle}>
            {country}
        </span>
    );
}

export default CountryOption;
