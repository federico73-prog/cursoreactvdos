import React from 'react';
import Counter from '../Counter/Counter';
import './Item.css';
import { Link } from 'react-router-dom';



const Item = ({id,name,value,stock,img}) => {

    const onAdd = (cantidadItemCarrito) =>{   
        if(cantidadItemCarrito > 0){
            alert("Se agregaron " + cantidadItemCarrito + "  productos al carrito");
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
                        <p >Precio: {value}</p>
                        <p >Stock: {stock}</p>
                        <p >Codigo: {id}</p>
                        
                    </div>
                </Link>
                <Counter initial={0} stock = {stock} onAdd = {onAdd}/>
               
        </div>
        );
   
}

export default Item;