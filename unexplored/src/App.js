import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import "./App.css";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <video
                    id="background-video"
                    src="/background-video.mp4"
                    loop
                    autoPlay
                    muted
                />
                <Router>
                    <div className="content-container">
                        <Header />
                        <div className="content-body-container">
                            <Route path="/" exact component={Landing} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/signUp" exact component={SignUp} />
                        </div>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
