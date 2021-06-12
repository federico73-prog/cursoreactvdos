
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import img1 from '../../assets/img/logo.JPG';
import img2 from '../../assets/img/img5.JPG';
import img3 from '../../assets/img/img6.JPG';
import './ItemList.css';



const ItemList = () => {
    const [localItems, setLocalItems] = useState([]);

    useEffect( () => {
        const productList = [
            {name:'Producto1', value: 1, stock:20, img : {img1}},
            {name:'Producto2', value: 2, stock:10, img: {img2}},
            {name:'Producto3', value: 3, stock:5, img: {img3}},
            {name:'Producto4', value: 3, stock:5, img: {img3}},
            {name:'Producto5', value: 3, stock:5, img: {img3}},
            {name:'Producto6', value: 3, stock:5, img: {img3}},
        ];

        const getItems = (productos) =>{
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                resolve(productos);
                }, 3000);
            });
        }
        getItems(productList)
            .then(result=>setLocalItems(result))
    },[])

    return(
            //promise.then(data => {
            <div className="row">
                {localItems.map((element,i) =>{//aca en vez de productList, iria data
                    return (
                        <div className="col-4 row__itemlist">
                            <Item name={element.name} value = {element.value} stock={element.stock} img ={element.img}/>
                        </div>
                    );
                })};
            </div>
            //})
        );
   
};


export default ItemList;