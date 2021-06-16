import React from 'react';
import Counter from '../Counter/Counter';
import './Item.css';



const Item = ({id,name,value,stock,img}) => {
     
    // eslint-disable-next-line no-lone-blocks
     return (

        <div className="card card__item">
                    <img className="img__item" src={img}/>
                    <div className="div__item">
                        <p>Producto: {name}</p>
                        <p>Precio: {value}</p>
                        <p>Stock: {stock}</p>
                        <p>Codigo: {id}</p>
                    </div>
                    <Counter initial={0} stock = {stock}  />
           
        </div>
        );
   
}

export default Item;