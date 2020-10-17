import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";

// import Navbar from 'react-bootstrap/Navbar'
// import { Button } from "Button";
import "./Navbar.scss"
import "../../assets/navbar/mars.png"
// import Switch from 'react-bootstrap/esm/Switch';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import About from '../Pages/About';


class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    };

    // mars = ({ slides }) => {

    // };

    render() {
        return (
            <>
            <nav className="NavbarItems">
                <h1 className="navbar-logo contr-home"><img className="marsImage" src={require('../../assets/navbar/mars_1.png')} alt="wasd"></img>&nbsp;School <span className="mars">MARS</span></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className="contr-button">
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <Button>Sign Up</Button> */}
            </nav>

            {/* <Router>
                <Switch>
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router> */}
            </>
        )
    }
}

export default Navbar