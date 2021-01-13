import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './CartWidget.png';

export const CartWidget = () => {
    return (
        <div>
            <div>
            <img src={Logo} alt="Carrito" />
            </div>
        </div>
    )
}

export default CartWidget