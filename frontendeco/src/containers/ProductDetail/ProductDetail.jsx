import React, { Component } from 'react'
import axios from "axios";
import { API_URL } from '../../api-config';
import { Row, Col } from 'antd';
import './ProductDetail.scss'
export default class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {},
            element: {}
        }
    }
    componentDidMount() {
        const { _id } = this.props.match.params;//extraemos el parámetro _id de la ruta
        axios.get(API_URL+'/products/search/id='+_id)//hacemos la petición para obtener ese producto en detalle
            .then(res => this.setState({ product: res.data }))//actualizamos el estado acorde a la respuesta del servi
    }

    addCart(element){
        localStorage.setItem('cart', JSON.stringify(this.state.element))
    }

    render() {
        let element = ''
        return (
            <Row className="product">
                <div>
                <img span={10} src={this.state.product?.image_path} alt=""/>
                </div>
                <div span={10} className="detail">
                    <div className="nameId">
                        <div>{this.state.product?.name}</div>
                        <div>{this.state.product?._id}</div>
                    </div>

                    <Col>{this.state.product?.description}</Col>
                    <Col>Precio: {this.state.product?.price}€</Col>
                    <Col>Stock: {this.state.product?.stock} unidades</Col>
                    <button OnClick={this.addCart(element)}>Add to carrito</button>
                </div>
            </Row>
        )
    }
}

// const mapStateToProps = (state) => ({ product: state.product })
// export default connect(mapStateToProps)(ProductDetail);