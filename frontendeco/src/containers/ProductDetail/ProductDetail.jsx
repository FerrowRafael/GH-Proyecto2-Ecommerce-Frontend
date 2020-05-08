import React, { Component } from 'react'
import axios from "axios";
import { API_URL } from '../../api-config';
// import './ProductDetail.scss'
export default class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }
    componentDidMount() {
        const { _id } = this.props.match.params;//extraemos el parámetro _id de la ruta
        axios.get(API_URL+'/products/search/id='+_id)//hacemos la petición para obtener ese producto en detalle
            .then(res => this.setState({ product: res.data }))//actualizamos el estado acorde a la respuesta del servi
    }
    render() {
        return (
            <div className="product">
                <h2>Detalles del Producto</h2>
                <img src={this.state.product?.image_path} alt="" />
                <div className="detail">
                    <span>{this.state.product?.price}€</span>
                    <span>{this.state.product?.stock} unidades</span>
                    <span>{this.state.product?.name}</span>
                    <span>{this.state.product?.description}</span>
                    <button>Comprar</button>
                </div>
            </div>
        )
    }
}