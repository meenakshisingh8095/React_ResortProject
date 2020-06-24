import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        };
    }
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen});
    }
    render() {
        return (
            <div className="navabr">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="beach-resort" />
                        </Link>
                        <button className="nav-btn" onClick={this.handleToggle}><FaAlignRight className="nav-icon"/></button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}