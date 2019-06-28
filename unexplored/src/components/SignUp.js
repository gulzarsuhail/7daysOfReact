import React, { Component } from "react";
import "./Auth.css";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            fullName: "",
            submit: false
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler(e) {
        e.preventDefault();
        // do something with the form data in this.state
        this.setState({ submit: true });
    }

    render() {
        const formData = this.state.submit ? (
            <div className="submit-success">
                <div>Sign Up Successful</div>
                <div>You will receive further instructions via email</div>
            </div>
        ) : (
            <form onSubmit={this.onSubmitHandler}>
                <label htmlFor="fullName">full name</label>
                <input
                    name="fullName"
                    type="input"
                    required
                    onChange={this.onChangeHandler}
                />
                <label htmlFor="email">email</label>
                <input
                    name="email"
                    type="email"
                    required
                    onChange={this.onChangeHandler}
                />
                <label htmlFor="password">password</label>
                <input
                    name="password"
                    type="password"
                    required
                    onChange={this.onChangeHandler}
                />
                <button className="submit-button" type="submit">
                    Sign Up
                </button>
            </form>
        );
        return <React.Fragment>{formData}</React.Fragment>;
    }
}

export default SignUp;
