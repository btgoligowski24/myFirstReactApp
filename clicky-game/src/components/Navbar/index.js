import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
    state: {
        textClass: ""
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg static-top w-100">
                <ul className="navbar-nav nav-fill w-100">
                    <li className="nav-item">
                        <a className="font-weight-bold" href="/">Memory Game</a>
                    </li>
                    <li className={`nav-item ${this.props.textClass}`}>
                    {this.props.children}
                    </li>
                    <li className="nav-item">
                    Score: {this.props.score} | High Score: {this.props.topScore}
                    </li>
                </ul>
            </nav>
        )
    }
  
}

export default Navbar;
