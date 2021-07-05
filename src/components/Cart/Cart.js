import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './Cart.css';
const Cart = () => {
    const {  cache } = useContext(CartContext);
    console.log(cache);
    return (
        <div>
                {cache.map((element,i) =>{
                        console.log(element.name);
                        return(
                        <p key={i}>{element.name} </p>)
                    
                })};
        </div>
    );
};

export default Cart;