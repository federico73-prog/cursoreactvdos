import React, { useContext,useState } from 'react';
import Counter from '../Counter/Counter';
import './Item.css';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Swal from 'sweetalert';

const Item = ({id,name,value,stock,img}) => {
    
    const { isInCache,addToCache,cache  } = useContext(CartContext);

    const onAdd = (cantidadItemCarrito) =>{   
        if(cantidadItemCarrito > 0){
            Swal({
                title: `Agregaste ${cantidadItemCarrito}  ${name} al carrito ` ,
                text: `Su valor es: $ ${value},00`,
                toast: false,
                position: 'top-left',
                background: 'black',
                timer: 4000,
                color: "white",
                icon: 'success',
                button: 'Aceptar'
            });
            if(isInCache({id})){
                cache.map((element) => {
                    if(element.id == id){
                        element.cantidadItemCarrito=element.cantidadItemCarrito + cantidadItemCarrito;
                    }
                })
            }
            addToCache({ id: id , name: name , value: value, cantidadItemCarrito: cantidadItemCarrito});
        }
        else{
            alert("Ingrese cantidad");
        }   
    } 
    // eslint-disable-next-line no-lone-blocks
     return (

        <div className="card card__item">
                <Link className="link"  to = {`/productDetail/${id}`} > 
                    <img className="img__item" src={img}/>
                    <div className="div__item">
                        <p ><b>{name}</b></p>
                        <p className="p__precio"> $ {value},00</p>
                        <p >Stock: {stock}</p>
                        <p >Codigo: {id}</p>
                    </div>
                </Link>
                <Counter initial={1} stock = {stock} onAdd = {onAdd}/>
        </div>
        );
}

export default Item;