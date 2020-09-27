import React, { Component } from 'react';
import './styles.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import cloth from './images/cloth.jpg'

export default class ClientDisplay extends Component {
    render(){
        return(
            <div className="info__container">
                <div className="line"></div>
                <h1 className="info__title">Bags Available For</h1>
                <div className="info__images">
                    <div className="info__box">
                        <AccessTimeIcon ></AccessTimeIcon>
                        <h3>Clocks shop</h3>
                    </div>
                    <div className="info__box">
                        <PhoneAndroidIcon className="icons"></PhoneAndroidIcon>
                        <h3>Mobile shop</h3>
                    </div>
                    <div className="info__box">
                        <img className="image" src={cloth} alt="cloth"></img>
                        <h3>Cloth shops</h3>
                    </div>
                </div>
            </div>
        )
    }
}