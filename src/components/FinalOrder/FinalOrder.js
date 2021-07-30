import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import './FinalOrder.css';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../factory/firebase.js';
import firebase from 'firebase/app';
import Swal from 'sweetalert';

const FinalOrder = () => {
  const { clear,cache,finalPrice,cacheSize } = useContext(CartContext);

  const saveOrder = () =>{
        
    const db = getFirestore();
    const order = db.collection('orders');
    console.log(cache)

    const newOrder ={
        buyer:{
            email: "juan_diaz@gmail.com",
            name: "juan diaz",
            phone: "55210111"
        },
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: finalPrice,
        items: [{cache}],
    }

    order.add(newOrder).then(({id})=>{
        
        Swal({
            title: `Gracias por su compra!`,
            text: `Su pedido ha sido procesado con exito. `,
            toast: true,
            position: 'bottom-end',
            timerProgressBar: true,
            background: "#56df5d",
            color: "white",
            icon: 'success',
            allowOutsideClick: true,
            button: 'Aceptar'
        })
        clear();

    }).catch((error)=>{
        console.log(error)
    })
} 
    return (
        
        
            <div>
               
                {cacheSize > 0 ? (
                    <div className="container container__order">

                        <p className="p__order">¿ Confirma su compra por $ {finalPrice},00 ?</p>
                        <button className="button__order" onClick = { () => saveOrder()} > Confirmar Compra </button>
                    </div>
                    ):(
                        <div className="container ">
                            <div className="col-auto text-center">
                                <p>{}</p>
                                <Link to={`/`}><button className="btn btn-secondary btn__volver">Volver al catalogo</button></Link>
                            </div> 
                        </div>
                    )
                }
            </div>
    );
};

export default FinalOrder;