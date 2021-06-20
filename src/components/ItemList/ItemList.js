
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.JPG';
import img3 from '../../assets/img/img3.JPG';
import img5 from '../../assets/img/img5.JPG';
import img6 from '../../assets/img/img6.JPG';
import img7 from '../../assets/img/img7.JPG';
import './ItemList.css';
import { useParams } from 'react-router-dom';


const ItemList = () => {
    const [localItems, setLocalItems] = useState([]);
    const [loading,setLoading] = useState(false);
    const { category } = useParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(  () => {
        const productList = [
            {name:'Papel Higiénico Higienol 30mts', value: 1, stock:20, img : img1,category: '1',description:"Papel Higiénico Higienol 30mts X4 unidades"},
            {name:'Papel Higiénico Higienol 50mts', value: 2, stock:10, img: img2, category: '1',description:"Papel Higiénico Higienol 50mts X4 unidades"},
            {name:'Papel Higiénico Elegante 80mts', value: 3, stock:5, img: img6, category: '1',description:"Papel Higiénico Elegante 80mts X4 unidades"},
            {name:'Papel Higiénico Elegante 50mts', value: 3, stock:5, img: img5,category: '1',description:"Papel Higiénico Elegante 50mts X24 unidades"},
            {name:'Papel Film X50mts', value: 3, stock:5, img: img7, category: '4',description:"Papel film X50mts"},
            {name:'Papel corrugado X50mts', value: 3, stock:5, img: img3,category: '2',description:"Papel corrugado X50mts"},
        ];

        
        const getItems = (productos) =>{
                return new Promise((resolve,reject) => {
                    setTimeout(() => {
                    resolve(productos);
                    setLoading(true);
                    }, 1500);
                });
            
        }
        
        getItems(productList)
                .then(result=>setLocalItems(result))
            
    },[]);

    if(loading===false){
        return <Spinner />
    }
    else{
        return(
            <div className="row">
                
                {localItems.map((element,i) =>{
                    if(element.category === {category}.category){
                        return (
                            <div className="col-4 row__itemlist" key={i}>
                                <Item  id={i} name={element.name} value = {element.value} stock={element.stock} img ={element.img} description ={element.description}/>
                            </div>
                    );}

                    if('0' === {category}.category ||  {category}.category === undefined){
                        return (
                            <div className="col-4 row__itemlist" key={i}>
                                <Item  id={i} name={element.name} value = {element.value} stock={element.stock} img ={element.img} description ={element.description}/>
                            </div>
                        );}
                })};
            
            </div>
        );
    }
};


export default ItemList;