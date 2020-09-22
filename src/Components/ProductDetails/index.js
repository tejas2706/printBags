import React, { Component } from 'react';
import Banners from '../Banners';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './styles.css';

export default class ProductDetails extends Component {
    render() {
        console.log("Hello modal")
        return (
            <div>
                <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    <h3>{this.props.modalData.prod_name}</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <div className="modal__container">
                       <h4><strong>Samples</strong></h4>
                       <div className="samples">
                            <img className="sample_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMgt0jHnFxCtYpD_51tYbZsoZDB4cU7rxp_Q&usqp=CAU" alt="img1"></img>
                            <img className="sample_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMgt0jHnFxCtYpD_51tYbZsoZDB4cU7rxp_Q&usqp=CAU" alt="img1"></img>
                            <img className="sample_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMgt0jHnFxCtYpD_51tYbZsoZDB4cU7rxp_Q&usqp=CAU" alt="img1"></img>
                            <img className="sample_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMgt0jHnFxCtYpD_51tYbZsoZDB4cU7rxp_Q&usqp=CAU" alt="img1"></img>
                            <img className="sample_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMgt0jHnFxCtYpD_51tYbZsoZDB4cU7rxp_Q&usqp=CAU" alt="img1"></img>
                            <img className="sample_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMgt0jHnFxCtYpD_51tYbZsoZDB4cU7rxp_Q&usqp=CAU" alt="img1"></img>
                       </div>
                       <div className="more_details">
                            <h4>Price: {this.props.modalData.price}</h4>
                            <h4>Min Qty: {this.props.modalData.minQty}</h4>
                            <h4>Bag Type: {this.props.modalData.type}</h4>
                            <h4>Shape: {this.props.modalData.shape}</h4>
                            <h4>Availability: {this.props.modalData.isAvailable}</h4>
                            <h4>Availabile in colors: {this.props.modalData.colors}</h4>
                            <h4>SingleColor/Multicolor: {this.props.modalData.multicolor}</h4>
                       </div>
                   </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
                </Modal>

                
            </div>
        )
    }
}