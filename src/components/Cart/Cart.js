import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import './Cart.css';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../factory/firebase.js';
import firebase from 'firebase/app';

const Cart = () => {
    const [loading,setLoading] = useState(false);
    const {  cache,removeToCache,cacheSize,finalPrice } = useContext(CartContext);
    
    
    const saveOrder = () =>{
        setLoading(true);
        const db = getFirestore();
        const order = db.collection('orders');
        const newOrder = {
            buyer:{
                email: "juan_diaz@gmail.com",
                name: "juan diaz",
                phone: "55210111"
            },
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: finalPrice

        }

        order.add(newOrder).then(({id})=>{
            setLoading(false);
            console.log(`${id}`)

        }).catch((error)=>{
            console.log(error)
        })
    } 

    return (
        <div className = "container">
            {cacheSize > 0 ? (
                <div>
                    <table className= "tabla__compra" >
                        <tbody><th>Numero</th><th>Producto</th><th> Precio </th><th> Cantidad</th><th> Precio final</th><th></th></tbody>
                        {cache.map((element,i) =>{
                        return(
                                
                                <tr key={i}> 
                                        <td> {i+1} </td> 
                                        <td> {element.name} </td> 
                                        <td> {element.value} </td> 
                                        <td> {element.cantidadItemCarrito} </td> 
                                        <td> {element.cantidadItemCarrito * element.value}</td>
                                        <td> <button onClick = { () => removeToCache(element)}>Eliminar</button ></td>
                                </tr>
                            )
                        })}
                    </table>
                    <div className="container d-flex footer__cart">
                        <h3 className="h3_precio_final">Precio Final: $ {finalPrice},00</h3>
                        <button className="button_vaciar_carrito"> Vaciar Carrito </button>
                        <button onClick={()=> saveOrder()} className="button_finalizar_compra"> Finalizar Compra </button>
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