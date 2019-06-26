import React, { Component } from 'react';
import './AddTodo.css';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTodo: "",
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
    }

    changeHandler(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    submitHandle(e){
        e.preventDefault();
        this.props.handleSubmit(this.state.newTodo);
        this.setState({newTodo: ""});
    }

    render(){
        return (
            <form className="addTodo_form" onSubmit={this.submitHandle}>
                <input 
                    name="newTodo" 
                    className="addTodo_input" 
                    placeholder="Add Todo..." 
                    onChange={this.changeHandler} 
                    value={this.state.newTodo}
                ></input>
                <button disabled={!this.state.newTodo} className="addTodo_button" type="submit">+</button>
            </form>
        )
    }
}

export default AddTodo;