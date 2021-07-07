import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
const Cart = () => {
    const {  cache,removeToCache,cacheSize } = useContext(CartContext);
    console.log(cache);
    console.log(cacheSize);
    return (
        <div className = "container">
            {cacheSize > 0 ? (
                <table className= "tabla__compra" >
                    <thead><tr><th>Numero</th> <th>Producto</th><th> Precio </th><th> Cantidad</th><th> Precio final</th> <th> </th></tr></thead>
                    {cache.map((element,i) =>{
                        return(
                                
                                <tr key={i}> 
                                        <td> {i+1} </td> 
                                        <td> {element.name} </td> 
                                        <td> {element.value} </td> 
                                        <td> {element.cantidadItemCarrito} </td> 
                                        <td> {element.cantidadItemCarrito * element.value}</td>
                                        <td> <button onClick = { () => removeToCache({id: element.id})}>Eliminar</button ></td>
                                </tr>
                            )
                    })}
                </table>
                ):(
                    <div className="container ">
                        <div className="col-auto text-center">
                            <h3 className="h3__cart">No se agregaron productos al carrito</h3>
                            <Link to={`/`}><button className="btn btn-secondary btn__volver">Volver al catalogo</button></Link>
                        </div>
                    </div>
                
                )
            }
         </div>
    )
}

export default Cart;