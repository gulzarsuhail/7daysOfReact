import React from 'react';
import './Block.css';

const Block = (props) => {
    return (
        <div style={{ "backgroundColor": props.color}} onClick={props.onclick} className="block_style">
        </div>
    );
}

export default Block;