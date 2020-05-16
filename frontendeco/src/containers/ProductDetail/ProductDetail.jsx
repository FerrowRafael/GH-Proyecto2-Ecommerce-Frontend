import React, { Component } from 'react'
import axios from "axios";
import { useParams, NavLink } from 'react-router-dom';
import { API_URL } from '../../api-config';
import { Row, Col } from 'antd';
import {  Button } from 'antd';
import { addCart} from '../../redux/actions/carrito'
import './ProductDetail.scss'
import { connect } from "react-redux";
class ProductDetail extends Component {


    constructor(props) {
        super(props);
        this.state = {
            active: false,
            // productoactual:{},
            // checkactual:{},

        }
    }

    check() {
        (this.checkactual ? this.setState({active: true}) : this.setState({active: false}))
        console.log(this.state.active);
    }

    componentDidMount() {
        // let productoactual = {};
        // let checkactual = {};
        const { _id } = this.props.match.params;//extraemos el parámetro _id de la ruta
        console.log(_id, this.props.products)
        // this.setState({productoactual: (this.props.products)?.find(product => product?._id === _id)})
        this.productoactual = (this.props.products)?.find(product => product?._id === _id)
        console.log(this.productoactual)
        // this.setState({checkactual:(this.props.cart)?.find(product => product?._id === this.productoactual?._id)})
        this.checkactual = (this.props.cart)?.find(product => product?._id === this.productoactual?._id)
        console.log(this.checkactual)
        this.check()
    }

    

    addProductoToCart(productoactual){
       productoactual.unit = productoactual.unit? productoactual.unit + 1 : 1;
    //    productoactual.active = true;
        addCart(productoactual);
        console.log(this.state.active);
        this.setState({active: true})
        console.log(this.state.active);
    } 

    render() {
        console.log(this.productoactual)
        return (
            <Row className="product">
                <div>
                <img span={10} src={this.productoactual?.image_path} alt=""/>
                </div>
                <div span={10} className="detail">
                    <div className="nameId">
                        <div>{this.productoactual?.name}</div>
                        <div>{this.productoactual?._id}</div>
                    </div>

                    <Col>{this.productoactual?.description}</Col>
                    <Col>Precio: {this.productoactual?.price}€</Col>
                    <Col>Stock: {this.productoactual?.stock} unidades</Col>
                    <Button type="primary" disabled={this.state.active} onClick={()=>{this.addProductoToCart(this.productoactual)}} htmlType="submit">
                        <NavLink to="/cesta" exact>Añadir al Carro</NavLink>
                    </Button>
                </div>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({ products: state.products, cart: state.cart })
export default connect(mapStateToProps)(ProductDetail);