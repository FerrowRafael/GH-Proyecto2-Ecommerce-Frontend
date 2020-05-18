import React, { useRef, useEffect } from 'react'
import { Form, Input, Button, Col, Row, notification } from 'antd';
import './Register.scss';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { API_URL } from '../../../api-config';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const Register = () => {
    const nameInput = useRef(null);
    const history = useHistory();//props.history

    useEffect(() => {
        nameInput.current.focus()
    }, [])

    const onFinish = user => {
        axios.post(API_URL + '/users/register', user)
            .then(() => {//como subscribe en angular
                notification.success({ message: 'Usuario creado con éxito' });
                window.setTimeout(() => {
                    history.push('/login')//this.router.navigate(['/login]) en angular
                 }, 2000)
            })
            .catch(console.error)
    };
    return (
        <div className="registerContainer">
            <Col span={8} col-16 className="registerleft">
                
                <Form
                    className="registerForm"
                    {...layout}
                    initialValues={{
                        remember: true,
                      }}
                    onFinish={onFinish}
                    onFinishFailed={console.error} >
                    <h3>Register</h3>
                    <Form.Item label="Nombre" name="userName" rules={[{ required: true, message: 'El nombre es requerido' }]}>
                        
                        <Input prefix={<UserOutlined />}ref={nameInput}/>
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'El email es requerido' }]}
                    >
                        <Input prefix={<MailOutlined />}/>
                    </Form.Item>

                    <Form.Item
                        label="Contraseña"
                        name="password"
                        rules={[{ required: true, message: 'La contraseña es requerida' }]}
                    >
                        <Input.Password prefix={<LockOutlined />}/>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Darse de alta
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={6} col-6 className="registerright">
                <img style={{width: "300px"}}src="https://pngimage.net/wp-content/uploads/2018/06/imagenes-random-png-2.png" alt=""/>
            </Col>
            
        </div>
    );
}
export default Register;