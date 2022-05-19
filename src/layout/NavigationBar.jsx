import React, { Component } from 'react';
import './navigation.css';

class Navbar extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="header__title">
                <i className="fa fa-film"></i>   Movie Organizer
                </h1>
            </div>
        );
    }
}

export default Navbar;