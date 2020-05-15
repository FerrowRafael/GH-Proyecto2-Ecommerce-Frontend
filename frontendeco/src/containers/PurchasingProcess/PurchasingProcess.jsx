import React, {Component} from 'react';
import OtroProduct from '../../components/OtroProduct/OtroProduct';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { comprar } from '../../redux/actions/carrito'

class PurchasingProcess extends Component{
    constructor(props) {
        super(props);
        
    }
    componentDidUpdate(){
        
    }

    render(){
        // const products={
        //     units: value,
        //     products:[product._id]
        // }

        return(
            <div>
            <div>
                {(this.props.cart)?.map(product => <OtroProduct key={product._id} product={product}/>)}
            </div>
            {/* <button onClick={()=>comprar(product)}>Comprar</button> */}
        
            </div>
        ) 
        
    }
}





const mapStateToProps = (state) => ({ cart: state.cart })
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