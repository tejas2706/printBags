import React, { Component } from 'react';
import './styles.css';

export default class ClientDisplay extends Component {
    constructor(){
        super();
        this.citites = ["Jalgaon", "Faizpur", "Yawal", "Bhusawal", "Raver", 
        "Chalisgaon", "Mumbai"];

    }

    render(){
        return(
            <div className="cities__container">
                <div className="line"></div>
                <h1 className="cities__title">Operating in cities</h1>
                <div className="cities__images">
                    {
                        this.citites.map((each)=>{
                            return (
                                <div className="cities_each">
                                    <h4 className="city">{each}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}