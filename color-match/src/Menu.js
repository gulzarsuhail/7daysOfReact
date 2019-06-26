import React from 'react';
import './Menu.css'
const Menu = (props) => {
    return (
        <div className="menuStyle">
            <span className="logoStyle">colorMatch</span>
            <span className="buttonStyle" onClick={props.restart}>New Game</span>
        </div>
    );
}

export default Menu;