import React, { Component } from 'react';
import './Header.scss';
import Search  from '../SearchBar/SearchBar'
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/actions/users';
import { connect } from "react-redux";
// import { Button } from 'antd';

class Header extends Component {
    

    render(){
        console.log(this.props.user)
        return (
            
            <header className="header">
            
                <div className="leftHeader">
                    <NavLink to="/home" exact>Logo</NavLink>
                    <NavLink to="/home" exact>Home</NavLink>
                    <NavLink to="/results" exact>Products</NavLink>
                </div>
                
                <div className="search">
                    <Search/>
                </div>
                
                {this.props.user ?
                <div className="userZone">
                    <NavLink to="/" exact>Bienvenido, {this.props.user.userName}</NavLink>
                    <NavLink to="/carrito" exact>Carrito</NavLink>
                    <NavLink type="link" onClick={logout} to="/home">Logout</NavLink>
                </div>
                :
                <div className="guestZone">
                    <NavLink to="/register" exact>Registro</NavLink>
                    <NavLink to="/login" exact>Login</NavLink>
                </div>
            }
            
            </header>
        )
    }
    
}
const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps)(Header);