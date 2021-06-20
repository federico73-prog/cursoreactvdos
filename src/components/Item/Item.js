import React from 'react';
import Counter from '../Counter/Counter';
import './Item.css';
import { Link } from 'react-router-dom';



const Item = ({id,name,value,stock,img,description}) => {
    // eslint-disable-next-line no-lone-blocks
     return (

        <div className="card card__item">
                <Link className="link"  to = {`/productDetail/${id}/${name}/${value}/${stock}/${description}`} > 
                    <img className="img__item" src={img}/>
                    <div className="div__item">
                        <p p__name><b>{name}</b></p>
                        <p p__car>Precio: {value}</p>
                        <p p__car>Stock: {stock}</p>
                        <p p__car>Codigo: {id}</p>
                    </div>
                </Link>
                <Counter initial={0} stock = {stock}  />
        </div>
        );
   
}

export default Item;