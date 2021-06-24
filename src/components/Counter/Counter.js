import React, { useState } from 'react';
import './Counter.css';
import { Link } from 'react-router-dom';

const Counter = ({initial, stock}) => {
   

    const [cantidadItem, setcantidadItem] = useState(initial);
    const [cantidadItemCarrito, setcantidadItemCarrito] = useState(initial);

    const addcantidadItem  = () => {
        if(cantidadItem < stock){
            setcantidadItem(cantidadItem+1);
        }
        else{
            alert("No hay mas stock del producto");
        }
    }

    const removecantidadItem  = () => {
        if(cantidadItem > 0)
            setcantidadItem(cantidadItem-1);
    }

    const onAdd = (amount) =>{   
        if(amount > 0){
            setcantidadItemCarrito(amount);
            alert("Se agregaron " + amount + "  productos al carrito");
        }
        else{
            alert("Ingrese cantidad");
        }   
    } 

    return (
        <div className="container mt-3  container__counter">
            <div className=" container d-flex align-cantidadItem-center justify-content-center  mb-1 containter__counter__secondary ">
                <i> <button className="btn__counter"><ion-icon name="remove-circle-outline"  onClick= {removecantidadItem}></ion-icon></button></i>
                <span className="span__counter">{cantidadItem}</span>
                <i> <button className="btn__counter"><ion-icon name="add-circle-outline" onClick= {addcantidadItem}></ion-icon></button></i>
            </div>
            <div className=" container d-flex align-cantidadItem-center justify-content-center  mb-1 containter__counter__secondary ">
            <button className="btn btn-secondary btn__agregar" onClick = {() => onAdd(cantidadItem)}>Agregar</button>
            {cantidadItemCarrito >= 1 && <Link to = {`/Cart`}><button className="btn btn-secondary btn__terminarCompra">Termina compra</button></Link>}
            </div>
            <h4>Productos en carrito: {cantidadItemCarrito}</h4>
        </div>
    );
};

export default Counter;