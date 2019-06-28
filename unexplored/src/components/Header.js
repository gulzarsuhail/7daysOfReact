import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

const Header = ({ match }) => {
    return (
        <div className="navbar">
            <Link to="/">
                <span className="logo">unexplored</span>
            </Link>
            <span>
                <NavLink
                    exact={true}
                    className="navbar_button"
                    activeClassName="is-active"
                    to="/login"
                >
                    Login
                </NavLink>
                <NavLink
                    exact={true}
                    className="navbar_button"
                    activeClassName="is-active"
                    to="/signUp"
                >
                    SignUp
                </NavLink>
            </span>
        </div>
    );
};

export default Header;
