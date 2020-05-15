import React, { Component } from 'react'
import axios from "axios";
import { API_URL } from '../../api-config';
import { Row, Col } from 'antd';
import Product from '../../components/Product/Product';
// import { addCarrito} from '../../redux/actions/carrito'
import './ProductDetail.scss'
import { connect } from "react-redux";
class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {},
            element: {},
            detalle: {},
            result: {},

        }
    }
    componentDidMount() {
        const { _id } = this.props.match.params;//extraemos el parámetro _id de la ruta
        console.log(_id, this.props.products)
        // {this.props.products?.filter(product=>_id ? this.product._id.includes(_id):true)
        //     ?.map(product => <Product key={this.product._id} product={product} />)}
            const result = (this.props.products)?.find(product => product._id === _id)
            this.setState({result}) 
            console.log(result)



        // for (let i = 0; i < this.props.products?.length; i++) {
        //     if(this.props.products[i]._id === _id ){
        //         this.setState({productoactual : this.props.products[i]}) 
        //     }
            // console.log(this.props.product[i])
            // console.log(productoactual)
            
        // }

    }

    addCart(element){

        localStorage.setItem('cart', JSON.stringify(this.state.element))
    }

    render() {
        console.log(this.state.result)
        let element = ''
        return (
            <Row className="product">
                <div>
                <img span={10} src={this.state.result?.image_path} alt=""/>
                </div>
                <div span={10} className="detail">
                    <div className="nameId">
                        <div>{this.state.result?.name}</div>
                        <div>{this.state.result?._id}</div>
                    </div>

                    <Col>{this.state.result?.description}</Col>
                    <Col>Precio: {this.state.result?.price}€</Col>
                    <Col>Stock: {this.state.result?.stock} unidades</Col>
                    <button onClick={this.addCart(element)}>Add to carrito</button>
                </div>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({ products: state.products })
export default connect(mapStateToProps)(ProductDetail);