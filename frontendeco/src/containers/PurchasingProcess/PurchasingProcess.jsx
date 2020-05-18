import React, {Component, Fragment} from 'react';
import OtroProduct from '../../components/OtroProduct/OtroProduct';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Card, Button, InputNumber, Modal } from 'antd';
import { addCantCart, subCantCart, clearOneProduct, comprar } from "../../redux/actions/carrito"; 
import { emptyCart } from "../../redux/actions/carrito";
import axios from 'axios';

// import { API_URL } from '../../api-config'

class PurchasingProcess extends Component{

    constructor(props) {
        super(props);
        this.state = {
            total: this.product?.price*this.product?.unit,
            TotalPrecio: this.props.cart.reduce((sum, i) => {
                return sum + (i.price * i.unit)
              }, 0),
            visible: false
        }
    }

    componentWillReceiveProps(){
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

    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    
    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };


    render(){
        let productIds = this.props.cart.map(producto => 
            ({name: producto.name,_id: producto._id, unit: producto.unit, 
                subtotal: producto.unit*producto.price}));
        console.log(productIds)
        return(
            <Fragment>
            <div className="product">
  
                {(this.props.cart)?.map(product => <OtroProduct showInput={true} key={this.product?._id} product={product}/>)}
                <td>Continuar Comprando</td>
                <td>Total del Pedido: {this.state.TotalPrecio.toFixed(2)} €</td>
                <td><Button type="primary" onClick={()=>emptyCart()} >Borrar pedido</Button></td>
                <td className="buttonContainer mb3">
                    <Button type="primary" onClick={() => {comprar(productIds); this.showModal()}}>Confirma tu pedido</Button>
                </td>
                
                <td></td>
                <td></td>
            </div>

            <div>
                {/* <Button type="primary" onClick={this.showModal}> */}
                {/* Open Modal
                </Button> */}
                <Modal
                    title="Compra realizada con exito"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <div>
                        {(this.props.compra?.productIds)?.map(producto => { 
                            return <div>
                                <p>{producto.unit} Unidades. {producto.name} {producto.subtotal.toFixed(2)} €</p>
                            </div>
                            })}
                        <p>Total Pedido: {this.state.TotalPrecio.toFixed(2)} €</p>
                        <p>Gracias por comprar en nuestra tienda</p>
                    </div>
                </Modal>
            </div>
            </Fragment>
        )
    }
}




const mapStateToProps = (state) => ({ cart:[...state.cart], user:state.user, compra:state.compra})
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