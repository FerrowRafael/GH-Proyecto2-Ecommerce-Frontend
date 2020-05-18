import React, { Component, Fragment } from 'react'
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
            <Fragment>
                <Row className="product">
                    <Col span={9} offset={6} className="imagen">
                        <img span={10} src={this.productoactual?.image_path} alt=""/>
                    </Col>
                    <Col span={5} className="detail">
                        <h3>{this.productoactual?.name}</h3>
                        <div>
                            <Col><p>{this.productoactual?.description}</p></Col>
                            <Col><p>Precio: {this.productoactual?.price}€</p></Col>
                            <Col><p>Stock: {this.productoactual?.stock} unidades</p></Col>
                        </div>
                    

                        <Button type="primary" disabled={this.state.active} onClick={()=>{this.addProductoToCart(this.productoactual)}} htmlType="submit">
                            <NavLink to="/carrito" exact>Añadir al Carro</NavLink>
                        </Button>
                    </Col>
                </Row>
                <div className="sugerencias">
                    <h2>Sugerencias</h2>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({ products: state.products, cart: state.cart })
export default connect(mapStateToProps)(ProductDetail);