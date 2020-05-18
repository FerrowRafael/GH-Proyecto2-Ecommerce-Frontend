import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Button, InputNumber } from 'antd';
import { addCantCart, subCantCart, clearOneProduct } from "../../redux/actions/carrito"; 
import './OtroProduct.scss';

// import './OtroProducts.scss'
import { clear } from 'redux-localstorage-simple';
// const { _id } = useParams();//extraemos el parámetro _id de la ruta (ActivatedRoute para recoger params)

const OtroProduct = ({ product, showInput }) => {

const [total,  setTotal] = useState(product?.price*product.unit) 

function addValue(value) {
   setTotal((value+1)*product?.price)
   addCantCart(product._id);
}
function subValue(value) {
   setTotal((value-1)*product?.price)
   subCantCart(product._id);
}
    
    return (
        <div>
            <div className="product" key={product?._id}>
                <div>
                    <table>
                        <tbody>
                            <thead>
                                <td>Producto</td>
                                <td></td>
                                <td>Precio Unitario</td>
                                <td>Cantidad</td>
                                <td></td>
                                <td>Precio Total</td>
                            </thead>
                            <tbody>
                                <td>
                                    <Link className="product" key={product._id} to={'/product/'+product._id}>
                                        <img style={{ width: 150 }}src={product.image_path} alt="" />
                                    </Link>
                                </td>
                                <td>
                                    <p>{product.name}</p>
                                    <p>{product.description}</p>
                                    <p>Código: {product._id}</p>
                                    <p>DISPONIBLE ONLINE</p>
                                </td>
                                <td>{product.price} €</td>
                                <td>{product.unit}</td>
                                <td class="row">
                                <Button type="primary" onClick={()=>addValue(product.unit)} shape="circle">+</Button>
                                <p>{product.unit}</p>
                                <Button type="primary" onClick={()=>subValue(product.unit)} shape="circle">-</Button>
                                </td>
                                <td>{total.toFixed(2)} €</td> 
                                <td><Button type="primary" onClick={()=>clearOneProduct(product.unit)} shape="circle">-</Button></td>  
                            </tbody>
                        </tbody>
                    </table>     
                </div>
            </div>    
        </div>
    
    )
}
export default OtroProduct;