import React, { Component } from 'react';
import './styles.css';
import Navbar from '../../Components/Navbar';
import Product from '../../Components/Product';
import Banners from '../../Components/Banners';
import ProductDetails from '../../Components/ProductDetails';
import Footer from '../../Components/Footer';
import ClientDisplay from '../../Components/ClientsDisplay';
import Cities from '../../Components/Cities';
import { db } from '../../firebase';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            "types":[],
            "designs":[
                {
                    "designId":1,
                    "design_name":"Non Woven 1",
                    "fit for sizes":"12 x 13, 12 x 15",
                    "url":"https://www.pngitem.com/pimgs/m/262-2624859_shopping-bag-png-shopping-bag-logo-png-transparent.png",
                    "isAvailable":true
                },
                {
                    "designId":2,
                    "design_name":"Non Woven 1",
                    "fit for sizes":"12 x 13, 12 x 15",
                    "url":"https://www.pngitem.com/pimgs/m/262-2624859_shopping-bag-png-shopping-bag-logo-png-transparent.png",
                    "isAvailable":true
                },
                {
                    "designId":3,
                    "design_name":"Non Woven 1",
                    "fit for sizes":"12 x 13, 12 x 15",
                    "url":"https://www.pngitem.com/pimgs/m/262-2624859_shopping-bag-png-shopping-bag-logo-png-transparent.png",
                    "isAvailable":true
                },
                {
                    "designId":4,
                    "design_name":"Non Woven 1",
                    "fit for sizes":"12 x 13, 12 x 15",
                    "url":"https://www.pngitem.com/pimgs/m/262-2624859_shopping-bag-png-shopping-bag-logo-png-transparent.png",
                    "isAvailable":true
                }
            ],
            "modalForProdDetails":false
        }
    }

    openProductDetails = (modalData) =>{
        this.setState({"modalForProdDetails": true, "modalData":modalData});
    }

    componentDidMount(){
        console.log("Component did mount");
        db.child('types').on('value',snapshot=>{
            if(snapshot.val()){
                console.log("Home -> componentDidMount -> snapshot.val()", snapshot.val())
                this.setState({"types":snapshot.val()})
            }
        })
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    render() {


        return (
                <div className="home__container">
                    {
                    this.state.modalForProdDetails ? 
                    <ProductDetails 
                            show={this.state.modalForProdDetails}
                            onHide={() => this.setState({"modalForProdDetails": false})}
                            modalData={this.state.modalData}
                    />
                        :
                    null
                }
                    <Navbar></Navbar>
                    <div className="line__header"></div>
                    <Banners></Banners>
                    <div className="container">
                        <ul className="nav nav-tabs md-tabs" id="myTabEx" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active show" id="home-tab-ex" data-toggle="tab" href="#explore-styles" role="tab" aria-controls="explore-styles"
                                    aria-selected="true">Explore Types</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab-ex" data-toggle="tab" href="#explore-designs" role="tab" aria-controls="explore-designs"
                                    aria-selected="false">Explore Designs</a>
                            </li>
                        </ul>
                        <div className="tab-content pt-5 tabs " id="myTabContentEx">
                            <div className="tab-pane fade active show" id="explore-styles" role="tabpanel" aria-labelledby="home-tab-ex">
                                <div className="home_products">
                                    {
                                        this.state.types ?
                                        this.state.types.map((each)=> {
                                            return(
                                                <Product key={each.prodId} data={each} onClick={()=> this.openProductDetails(each)}></Product>
                                            )
                                        })
                                        :null
                                    }
                                </div>
                            </div>
                            <div className="tab-pane fade" id="explore-designs" role="tabpanel" aria-labelledby="profile-tab-ex">
                                <div className="home_products">
                                    {
                                        this.state.designs.map((each)=> {
                                            return(
                                                <Product key={each.designId} data={each}></Product>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <ClientDisplay></ClientDisplay> */}
                <Cities></Cities>
                <Footer></Footer>
                </div>
        )
    }
}
