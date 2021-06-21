import React, { useState } from 'react';
import './Counter.css';

const Counter = ({initial, stock}) => {
   

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

    const onAdd = (amount) =>{   
        if(amount > 0){
            alert("Se agregaron " + amount + "  productos al carrito");
        }
        else{
            alert("Ingrese cantidad");
        }   
    } 

    return (
        <div className="container mt-3  container__counter">
            <div className=" container d-flex align-items-center justify-content-center  mb-1 containter__counter__secondary ">
                <i> <button className="btn__counter"><ion-icon name="remove-circle-outline"  onClick= {removeItems}></ion-icon></button></i>
                <span className="span__counter">{items}</span>
                <i> <button className="btn__counter"><ion-icon name="add-circle-outline" onClick= {addItems}></ion-icon></button></i>
            </div>
            <button className="btn btn-secondary btn__agregar" onClick = {() => onAdd(items)}>Agregar</button>
        </div>
    );
};

export default Counter;