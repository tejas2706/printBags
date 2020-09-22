import React, { Component } from 'react';
import img1 from './img1.png';
import img2 from './img2.png'
import './styles.css'

export default class Banners extends Component {
    render() {
        return (
            <div className="banner__container">
                <div id="carousel_1" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel_1" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel_1" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={img1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img2} alt="Second slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel_1" role="button" data-slide="prev" >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel_1" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}