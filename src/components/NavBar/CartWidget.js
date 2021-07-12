import './CartWidget.css';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () =>{
    const { cantItemTotal } = useContext(CartContext);

    console.log(cantItemTotal)
    return(
        
        <div className="div__widget">
            {cantItemTotal > 0 ? (
                <div className="row">
                    < Link to = {`/Cart`}><ion-icon name="cart-outline" class="icono__carrito"></ion-icon></Link>
                    <h2 className="h2-widget">{cantItemTotal}</h2>
                </div>
         
         ):(
             <></>
        )}
        </div>
    )
         
}

export default CartWidget; 