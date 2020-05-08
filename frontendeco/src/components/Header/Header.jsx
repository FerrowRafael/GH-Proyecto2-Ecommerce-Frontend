import React from 'react';
import './Header.scss';
// import Search  from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            {/* NavLink es para crear una clase active cuando esta en la ruta */}
            <NavLink to="/home" exact>Logo</NavLink>
            <NavLink to="/home" exact>Home</NavLink>

            <div className="search">
                <input type="text" placeholder="Nombre, descripción"/>
                <button>Buscar</button>
                {/* <Search/> */}
            </div>

            <div className="guestZone">
                <NavLink to="/login" exact>Login</NavLink>
                <NavLink to="/register" exact>Registro</NavLink>
            </div>

            {/* Dependiendo si es user/admin/seller, mostrar diferentes profile */}
            {/* <div className="userZone">
                <NavLink to="/cart" exact>Cesta</NavLink>
                <NavLink to="/logout" exact>Logout</NavLink>
                <NavLink to="/profile" exact>Profile</NavLink>
            </div> */}
        </header>
    )
}
export default Header;