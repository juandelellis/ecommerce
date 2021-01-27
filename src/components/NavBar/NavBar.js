import React from 'react'
import './navbar.css'
import CartWidget from "../CartWidget/CartWidget"
import 'bootstrap/dist/css/bootstrap.min.css';
import {  NavLink } from "react-router-dom";


export const NavBar = () => {
    return (
        <div className='containerNav'>
            <div className='containerNav'>
            <NavLink to='/'>
            ZAPARG
            </NavLink>
            </div>
            <NavLink to='/category/:id'>
            <p>Home</p>
            </NavLink>
            <NavLink to='/category/category/:id'>
            <p>Categorias</p>
            </NavLink>
            <NavLink to='/contact'>
            <p>Contacto</p>
            </NavLink>
            <CartWidget />
        </div>
    )
}
