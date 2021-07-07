import './CartWidget.css';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () =>{
    const {  cacheSize } = useContext(CartContext);

    return(
        <div >
            <div className="row">
                < Link to = {`/Cart`}><ion-icon name="cart-outline" class="icono__carrito"></ion-icon></Link>
                <h2 className="h2_cartWidget">5</h2>
            </div>
         </div>
    );
}

export default CartWidget; 