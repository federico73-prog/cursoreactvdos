import React, { useState } from 'react';
import './Counter.css';

const Counter = ({initial, stock, onAdd}) => {
   

    const [cantidadItem, setcantidadItem] = useState(initial);
    

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

    

    return (
        <div className="container mt-3  container__counter">
            <div className=" container d-flex align-cantidadItem-center justify-content-center  mb-1 containter__counter__secondary ">
                <i> <button className="btn__counter"><ion-icon name="remove-circle-outline"  onClick= {removecantidadItem}></ion-icon></button></i>
                <span className="span__counter">{cantidadItem}</span>
                <i> <button className="btn__counter"><ion-icon name="add-circle-outline" onClick= {addcantidadItem}></ion-icon></button></i>
            </div>
            <div className=" container d-flex align-cantidadItem-center justify-content-center  mb-1 containter__counter__secondary ">
                <button className="btn btn-secondary btn__agregar" onClick = { () => onAdd(cantidadItem)}>Agregar</button>
            </div>
        </div>
    );
};

export default Counter;