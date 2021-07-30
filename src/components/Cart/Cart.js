import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { clear,cache,removeToCache,cacheSize,finalPrice } = useContext(CartContext);

    return (
        <div className = "container">
            {cacheSize > 0 ? (
                <div>
                    
                    <div className="container div__etiqueta">
                        <h1 className="h1__etiqueta">Detalle de su carrito:</h1>
                    </div>

                    <table className= "tabla__compra" >
                        <thead><tr><th>Numero</th><th>Producto</th><th> Precio Unitario </th><th> Cantidad</th><th> Precio Final</th><th></th></tr></thead>
                        {cache.map((element,i) =>{
                        return(
                                <tbody key={i}>
                                <tr > 
                                        <td> {i+1} </td> 
                                        <td> {element.name} </td> 
                                        <td> $ {element.value},00 </td> 
                                        <td> {element.cantidadItemCarrito} </td> 
                                        <td> $ {element.cantidadItemCarrito * element.value},00</td>
                                        <td> <button className="btn btn-secondary btn__eliminar" onClick = { () => removeToCache(element)}>X</button ></td>
                                </tr>
                                </tbody>
                            )
                        })}
                    </table>

                    <div className="container footer__cart">
                        <div className="col-auto text-center">
                                <div className="container container__precio__final ">
                                    <h3 className="h3_precio_final"><b>Precio Final: </b></h3>
                                    <h3 className="h3_precio_final">${finalPrice},00</h3>
                                    <div className="container__buttons">
                                    <button onClick = { () => clear()} className="btn btn-secondary button_vaciar_carrito"> Vaciar Carrito </button>
                                    <Link to={`/FinalOrder`}><button  className="btn btn-secondary button_finalizar_compra"> Comprar </button></Link>
                                 </div>
                                 </div>
                        </div>
                    </div>
                    </div>
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