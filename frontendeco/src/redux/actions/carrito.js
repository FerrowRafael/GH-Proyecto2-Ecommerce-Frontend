import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config'

// ADD CART
export const addCart = (cart) => {
    store.dispatch({ 
        type: 'ADD_CART',
        payload: cart
    });
}

// ADD CANTIDAD
export const addCantCart = (id) => {
    store.dispatch({ 
        type: 'ADD_CANT_CART',
        payload: id
    });
}

// SUBSTRACT CANTIDAD
export const subCantCart = (id) => {
    store.dispatch({ 
        type: 'SUB_CANT_CART',
        payload: id
    });
}

// CLEAR CARRITO
export const emptyCart = () => {
    store.dispatch({ 
        type: 'EMPTY_CART',
        payload: undefined
    });
}

// CLEAR ONE PRODUCT
export const clearOneProduct = (product) => {
    const manolo = store.getState()
    console.log(manolo.cart)
    product = manolo.cart.splice(product._id, 1)
    console.log(product, manolo.cart)
    store.dispatch({ 
        type: 'REMOVE_ONE_PRODUCT',
        payload: manolo.cart
    });
}

export const comprar = async(productIds) => {
    console.log(productIds)
    const res = await axios.post('http://localhost:3001/orders/add', {productIds}, {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    });
    store.dispatch({ 
        type: 'COMPRAR',
        payload: res.data
    });
    emptyCart()
    
}

        
    //procedemos a dar de alta las compras en la base de datos.

    // for (let [index, product] of this.props.cart) {
            
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
//             await axios.post('http://localhost:3001/orders/add', productsIDS, {
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
    
// };