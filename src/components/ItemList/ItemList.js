
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.JPG';
import img3 from '../../assets/img/img3.JPG';
import img5 from '../../assets/img/img5.JPG';
import img6 from '../../assets/img/img6.JPG';
import img7 from '../../assets/img/img7.JPG';
import './ItemList.css';



const ItemList = () => {
    const [localItems, setLocalItems] = useState([]);

    useEffect( () => {
        const productList = [
            {name:'Producto1', value: 1, stock:20, img : img1},
            {name:'Producto2', value: 2, stock:10, img: img2},
            {name:'Producto3', value: 3, stock:5, img: img6},
            {name:'Producto4', value: 3, stock:5, img: img5},
            {name:'Producto5', value: 3, stock:5, img: img7},
            {name:'Producto6', value: 3, stock:5, img: img3},
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
                {localItems.map((element,i) =>{
                    return (
                        <div className="col-4 row__itemlist">
                            <Item id={i} name={element.name} value = {element.value} stock={element.stock} img ={element.img} />
                        </div>
                    );
                })};
            </div>
            //})
        );
   
};


export default ItemList;