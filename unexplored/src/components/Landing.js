import React, { Component } from "react";
import "./Landing.css";

class Landing extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentTagline: 0,
            taglines: [
                "LIVE",
                "BE FREE",
                "DISCOVER",
                "WANDER",
                "ARRIVE"
            ],
        }
        this.changeTagline = this.changeTagline.bind(this);
        this.interval = setInterval(this.changeTagline.bind(this), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    changeTagline(){
        let currentTagline = this.state.currentTagline;
        if (++currentTagline === this.state.taglines.length)
            currentTagline = 0;
        this.setState({currentTagline});
    }

    render() {
        return (
            <div className="landing-container">
                <div className="motivate">IT'S YOUR TIME TO</div>
                <div className="tagline">{this.state.taglines[this.state.currentTagline]}</div>
            </div>
        );
    }
}

export default Landing;
