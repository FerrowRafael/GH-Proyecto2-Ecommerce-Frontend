import React, { useRef, useEffect } from 'react'
import { Form, Input, Button, notification } from 'antd';
import './Register.scss';
import { API_URL } from '../../api-config';
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
            <Form
                className="registerForm"
                {...layout}
                onFinish={onFinish}
                onFinishFailed={console.error} >
                <h3>Register</h3>
                <Form.Item
                    label="Nombre"
                    name="userName"
                >
                    <Input ref={nameInput}/>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'El email es requerido' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[{ required: true, message: 'La contraseña es requerida' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Darse de alta
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Register;