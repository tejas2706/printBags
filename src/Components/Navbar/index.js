import React, { Component } from 'react';
import './styles.css';

export default class Navbar extends Component{
    render(){
        return (
            <div className="app__header">
                <div className="app__logoAndName">
                    <img 
                        className="app__logo"
                        src="https://www.pinclipart.com/picdir/middle/444-4447891_shopping-bag-outline-tool-with-a-small-heart.png"
                        alt="logo"
                    />
                    <h1 className="app__title">Lad Printers</h1>
                </div>
                <div className="app__navbar">
                    <a href="#contact" className="app__contact_btn">Contact</a>
                </div>
            </div>
        )
    }
}
