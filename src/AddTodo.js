import React from 'react';
import './AddTodo.css';

const AddTodo = (props) => {
    return (
        <div className="addTodo_container">
            <form className="addTodo_form" onSubmit={props.handleSubmit}>
                <input 
                    name="newTodo" 
                    className="addTodo_input" 
                    placeholder="Add Todo..." 
                    onChange={props.handleChange} 
                    value={props.value}
                ></input>
                <button className="addTodo_button" type="submit">+</button>
            </form>
        </div>
    )
}

export default AddTodo;