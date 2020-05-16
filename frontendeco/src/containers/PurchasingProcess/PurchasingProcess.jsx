import React, {Component} from 'react';
import OtroProduct from '../../components/OtroProduct/OtroProduct';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Card, Button, InputNumber } from 'antd';
import { addCantCart, subCantCart, clearOneProduct, comprar } from "../../redux/actions/carrito"; 
import { emptyCart } from "../../redux/actions/carrito";
import axios from 'axios';

// import { API_URL } from '../../api-config'

class PurchasingProcess extends Component{

    constructor(props) {
        super(props);
        this.state = {
            total: this.product?.price*this.product?.unit,
            TotalPrecio: 0 ,
        }
    }
    componentDidMount(){
        let grandTotal = this.props.cart.reduce((sum, i) => {
            return sum + (i.price * i.unit)
          }, 0)
          this.setState({TotalPrecio:grandTotal})  
    }
    addValue(value) {
        this.state.total((value+1)*this.product?.price)
        addCantCart(this.product._id);
    }
    
    subValue(value) {
        this.state.total((value-1)*this.product?.price)
        subCantCart(this.product._id);
    }


    // async pulsaBuy() {
        
    //     //procedemos a dar de alta las compras en la base de datos.

    //     // for (let [index, product] of this.props.cart) {
                
    //         let body = {
    //             total: this.state.TotalPrecio,
    //             status: "pending",
    //             UserId: this.props.user._id,
    //             deliveryDate: '2020-05-20', 
    //             products: this.props.cart.map(producto => [{
    //                 productId: producto._id,
    //                 unit: producto.unit,
    //                 subtotal: (producto.unit)*(producto.price)
    //             }])
                
    //         };
    //         let productsIDS = this.props.cart.map(producto => producto._id);
    //         console.log(productsIDS);
    //     // }
        
    //         try {
    //             console.log(this.props.cart.length)
    //             await axios.post('http://localhost:3001/orders/add', this.body, {
    //                 headers: {
    //                     Authorization: localStorage.getItem('authToken')
    //                 }
    //             });
    //             console.log("hola")
    //             //Muestro
    //             // this.muestraError("Compra exitosa.", 2, false);

    //             setTimeout(() => {
    //                 //vaciamos la cesta.

    //                 emptyCart()
                    
    //                 //redireccionamos a main
    //                 this.props.history.push("/home");
    //             }, 2000);

    //         } catch (err) {
    //             // if (err.response) {
    //             //     if (err.response.data) {
    //             //         this.muestraError("Ha ocurrido un error.");
                        
    //             //     }
    //             //     return;
    //             // }
    //             console.log(err);
    //         }
        
    // }
    render(){
        let productIds = this.props.cart.map(producto => ({_id: producto._id, unit: producto.unit}));
        console.log(productIds)
        return(
            <div className="product">
  
                {(this.props.cart)?.map(product => <OtroProduct showInput={true} key={this.product?._id} product={product}/>)}
                <div>{this.state.TotalPrecio}</div>
                <Button type="primary" onClick={()=>emptyCart()} shape="circle">delete</Button>
                <div className="buttonContainer mb3">
                    <Button type="primary" onClick={() => {comprar(productIds)}}>Comprar</Button>
                </div>
            </div>
        )
    }
}




const mapStateToProps = (state) => ({ cart:[...state.cart], user:state.user})
export default connect(mapStateToProps)(PurchasingProcess);














// // PURCHASING PROCESS
// import React, { Component } from 'react'
// import axios from "axios";
// import { API_URL } from '../../api-config';


// export default class PurchasingProcess extends Component {

//     constructor(props) {
//         super(props),
//         this.state = {
//             total: "",
//             status: "",
//             store: "",
//             UserId: "",
//             deliveryDate: "",
//             products: []
//         }
//     }

//     componentDidMount() {
//         const { name } = this.props.match.params;
//         axios.get(API_URL + '/products/search/name=' + name)
//             .then(res => this.setState({ product: res.data }))
//     }

//     render() {
//         return (
//             console.log(this.state),
//             <input class="form-control" value={this.state.text} onChange={(text) => this.filter(text)}/>
//         )
//     }

// }