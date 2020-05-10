import React, { Component } from 'react';
import './Header.scss';
import Search  from '../SearchBar/SearchBar'
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import Logout from '../Logout/Logout'
import { Button } from 'antd';

class Header extends Component {

    render(){
        return (
            <div className="header">
                {/* NavLink es para crear una clase active cuando esta en la ruta */}
                <div className="leftHeader">
                    <NavLink to="/home" exact>Logo</NavLink>
                    <NavLink to="/home" exact>Home</NavLink>
                    <NavLink to="/results" exact>Products</NavLink>
                </div>
                
                <div className="search">
                    <Search/>
                </div>
    
                <div className="guestZone">
                    <NavLink to="/login" exact>Login</NavLink>
                    <Button type="link" onClick={Logout}>Logout</Button>
                </div>
    
                {/* Dependiendo si es user/admin/seller, mostrar diferentes profile */}
                {/* <div className="userZone">
                    <NavLink to="/cart" exact>Cesta</NavLink>
                    <NavLink to="/logout" exact>Logout</NavLink>
                    <NavLink to="/profile" exact>Profile</NavLink>
                </div> */}
            </div>
        )
    }
    
}
export default Header;