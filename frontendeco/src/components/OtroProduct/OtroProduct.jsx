import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, Button, InputNumber } from 'antd';
import { addCantCart, subCantCart, clearOneProduct } from "../../redux/actions/carrito"; 


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
                <Card
                    hoverable
                    style={{ width: 220 }}
                    cover={
                    <Link className="product" key={product._id} to={'/product/'+product._id}>
                        <img src={product.image_path} alt="" />
                    </Link>
                    }>
                    <div className="date">
                        <Col>{product.name}</Col>
                        <Col>{product.price} €</Col>

                    {showInput ? 
                    <div className="resu">
                        <p>{product.unit} </p>
                    <Col>
                        <Button type="primary" onClick={()=>addValue(product.unit)} shape="circle">+</Button>
                        <Button type="primary" onClick={()=>subValue(product.unit)} shape="circle">-</Button>
                        <Button type="primary" onClick={()=>clearOneProduct(product)} shape="circle">X</Button>
                    </Col>
                    <Col>Precio Total: {total}.00 $</Col> 
                    </div>
                    :
                    <Link className="product" key={product._id} to={'/product/'+product._id}>
                    <Button type="primary" htmlType="submit"> Detalls </Button>
                    </Link>
                    }
                    </div>
        
                    </Card>
                    </div>
            
                    </div>
    
    )
}
export default OtroProduct;