import React, { Component } from 'react';
import './Auth.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitHandler(e){
        e.preventDefault();
        // do something with the form data in this.state
    }

    render(){
        return (
            <form onSubmit={this.onSubmitHandler}>
                <label htmlFor="email">email</label>
                <input name="email" type="email" required onChange={this.onChangeHandler}></input>
                <label htmlFor="password">password</label>
                <input name="password" type="password" required onChange={this.onChangeHandler}></input>
                <button className="submit-button" type="submit">Login</button>
            </form>
        )
    }
}

export default Login;