

import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.JPG';
import img3 from '../../assets/img/img3.JPG';
import img5 from '../../assets/img/img5.JPG';
import img6 from '../../assets/img/img6.JPG';
import img7 from '../../assets/img/img7.JPG';

const ItemDetailContainer = () => {
    const [localItems, setLocalItem] = useState([]);
    const [loading,setLoading] = useState(false);
    const {id} = useParams();

    useEffect(  () => {

        const productList = [
            {name:'Papel Higiénico Higienol 30mts', value: 1, stock:20, img : img1,category: '1',description:"Papel Higiénico Higienol 30mts X4 unidades",id: 0},
            {name:'Papel Higiénico Higienol 50mts', value: 2, stock:10, img: img2, category: '1',description:"Papel Higiénico Higienol 50mts X4 unidades",id: 1},
            {name:'Papel Higiénico Elegante 80mts', value: 3, stock:5, img: img6, category: '1',description:"Papel Higiénico Elegante 80mts X4 unidades",id: 2},
            {name:'Papel Higiénico Elegante 50mts', value: 3, stock:5, img: img5,category: '1',description:"Papel Higiénico Elegante 50mts X24 unidades",id: 3},
            {name:'Papel Film X50mts', value: 3, stock:5, img: img7, category: '4',description:"Papel film X50mts",id: 4},
            {name:'Papel corrugado X50mts', value: 3, stock:5, img: img3,category: '2',description:"Papel corrugado X50mts",id: 5},
        ];

        console.log(id);

        const getProducto = (productos) =>{
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(productos);
                    setLoading(true);
                    
                }, 500);
            });
        }

        getProducto(productList)
            .then(result=>setLocalItem(result))
        

    },[])
    console.log(localItems);
    console.log(loading);
    console.log({id}.id);
    if(loading===false){
        return <Spinner />;
    }
    else{
        return (
            <div className="container">   
                {localItems.map((element,i) =>{
                    if(i == {id}.id){
                        return (
                        <div className="container-fluid container__IDT" key={i}>{
                                <ItemDetail  name={element.name} value = {element.value} stock = {element.stock}  description = {element.description} img={element.img}/>
                            }
                        </div>);
                    }
                })};
            </div>
        );
    }
};

export default ItemDetailContainer;