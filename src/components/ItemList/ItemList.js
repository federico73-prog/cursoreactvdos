import React from 'react';
import Item from '../Item/Item';
import img1 from '../../assets/img/logo.JPG';
import img2 from '../../assets/img/img5.JPG';
import img3 from '../../assets/img/img6.JPG';
import './ItemList.css';


const ItemList = () => {
    const productList = [
        {name:'Producto1', value: 1, stock:20, img : {img1}},
        {name:'Producto2', value: 2, stock:10, img: {img2}},
        {name:'Producto3', value: 3, stock:5, img: {img3}},
        {name:'Producto3', value: 3, stock:5, img: {img3}},
        {name:'Producto3', value: 3, stock:5, img: {img3}},
        {name:'Producto3', value: 3, stock:5, img: {img3}},
    ];

    const task = new Promise((resolve,reject) => {
        
        setTimeout(() => {
            resolve(productList);
        }, 3000);
    });
   
        return(
            //task.then(data => {
            <div className="row">
                {productList.map((element,i) =>{//aca en vez de productList, iria data
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