import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [localProduct, setLocalProduct] = useState([]);
    const [loading,setLoading] = useState(false);
    const {id,name,value,stock,description} = useParams();
    console.log(id,name);

    useEffect(  () => {

        const producto = {name: name, value: value, stock: stock,description: description};

        const getProducto = (producto) =>{
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(producto);
                    setLoading(true);
                }, 500);
            });
        }
        getProducto(producto)
            .then(result=>setLocalProduct(result))
    },[])

    if(loading===false){
        return <Spinner />;
    }
    else{
    return (
        <div className="container-fluid container__IDT">{
            <ItemDetail  name={localProduct.name} value = {localProduct.value} stock = {localProduct.stock} img = {localProduct.img} description = {localProduct.description} />
        }</div>
    );
    }
};

export default ItemDetailContainer;