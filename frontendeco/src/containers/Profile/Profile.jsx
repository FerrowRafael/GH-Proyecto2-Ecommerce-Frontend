// ORDER DETAILS
import React from 'react'
import { connect } from "react-redux";

const AdminProfile = () => {


    return (
        
        <div>
            <p>hola</p>
            <div >Prueba</div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    )
}

const mapStateToProps = (state) => ({ products: state.products, cart: state.cart })
export default connect(mapStateToProps)(AdminProfile);