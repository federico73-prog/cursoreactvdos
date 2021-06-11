import React from 'react';
import Counter from '../Counter/Counter';
import './Item.css';

const onAdd = (amount) =>{   
    if(amount > 0){
        alert("Se agregaron " + amount + "  productos al carrito");
    }
    else{
        alert("Ingrese cantidad");
    }   
} 

const Item = ({name,value,stock,img}) => {
     
    // eslint-disable-next-line no-lone-blocks
     return (

        <div className="card card__item">
                    <img src={img}/>
                    <p>Producto: {name}</p>
                    <p>Precio: {value}</p>
                    <p>Stock: {stock}</p>
                    <Counter initial={0} stock = {stock} onAdd={onAdd} />
           
        </div>
        );
   
}

export default Item;