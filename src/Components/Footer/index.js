import React, { Component } from 'react';
import './styles.css';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';

export default class Footer extends Component{
    render(){
        return (
            <div className="footer__container" id="contact">
                <h1 className="footer__contactTitle">CONTACT AND ORDER NOW</h1>
                <div className="footer__contactDetails">
                    <div className="contactDetails">
                        <h4 className="details">Kishor Lad</h4>
                        <h4 className="contact">4, Bhagirath Complex, Icchadevi Chowk</h4>
                        <h4 className="contact">Ganpati Nagar, Jalgaon</h4>
                        <h4 className="contact">Pincode: 425001</h4>
                        <h4 className="contact"><PhoneInTalkIcon ></PhoneInTalkIcon>+91 - 9325671641</h4>
                        <h4 className="contact"><EmailIcon ></EmailIcon> kishorlad763@gmail.com</h4>
                    </div>
                </div>
            </div>
        )
    }
}