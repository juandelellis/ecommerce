import React from 'react'
import './navbar.css'
import CartWidget from "../CartWidget/CartWidget"
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    return (
        <div className='containerNav'>
            <div className='containerNav'>
            logo
            </div>
            <p href="/home">Home</p>
            <p href="/home">Categorias</p>
            <p href="/home">Carrito</p> 
            <CartWidget />
        </div>
    )
}
