import React, { useState } from 'react';
import './Counter.css';

const Counter = ({initial, stock, onAdd}) => {
   

    const [items, setItems] = useState(initial);

    const addItems  = () => {
        if(items < stock){
            setItems(items+1);
        }
        else{
            alert("No hay mas stock del producto");
        }
    }

    const removeItems  = () => {
        if(items > 0)
            setItems(items-1);
    }

    return (
        <div className="container mt-3  container__counter">
            <div className=" container d-flex align-items-center justify-content-center  mb-1 containter__counter__secondary ">
                <i className="btn__counter"><ion-icon name="remove-circle-outline icn_counter"  onClick= {removeItems}></ion-icon></i>
                <span className="span__counter">{items}</span>
                <i className="btn__counter"><ion-icon name="add-circle-outline" onClick= {addItems}></ion-icon></i>
            </div>
            <button className="btn btn-secondary btn__agregar" onClick = {() => onAdd(items)}>Agregar</button>
        </div>
    );
};

export default Counter;