import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import img1 from '../../assets/img/img1.jpg';
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {
    const [localProduct, setLocalProduct] = useState([]);

    useEffect(  () => {
        const producto = {name:'Papel Higiénico Higienol 30mts', value: 1, stock:20, img : img1,description:"Papel Higiénico Higienol 30mts X4 unidades"};

        const getProducto = (producto) =>{
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(producto);
                }, 6000);
            });
        }
        getProducto(producto)
            .then(result=>setLocalProduct(result))
    },[])

    return (
        <div className="container-fluid container__IDT">{
            <ItemDetail  name={localProduct.name} value = {localProduct.value} stock = {localProduct.stock} img = {localProduct.img} description = {localProduct.description} />
        }</div>
    );
};

export default ItemDetailContainer;