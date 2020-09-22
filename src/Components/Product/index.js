import React, { Component } from 'react';
import './styles.css';

export default class Product extends Component{

    render(){
        return (
            <div className="product" onClick={this.props.onClick}>
                <h3 className="product__name"><strong>{this.props.data.prod_name}</strong></h3>
                <img 
                   className="product__img"
                   src={this.props.data.url}
                   alt="product"
                />
                <div className="product__productInfoBox">
                    <h4><strong>Size: </strong>{this.props.data.size}</h4>
                    <h4><strong>Price: </strong>{this.props.data.price}</h4>
                    <h4><strong>Min Order Qty: </strong>{this.props.data.minQty}</h4>
                    <div className="product__availability">
                    <h4>{this.props.data.isAvailable}</h4>
                    </div>
               </div>
            </div>
        )
    }
}
