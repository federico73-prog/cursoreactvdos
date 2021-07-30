
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';
import './ItemList.css';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../factory/firebase.js';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading,setLoading] = useState(false);
    const { category } = useParams();

    useEffect(  () => {
        const db = getFirestore();
        const itemCollection = db.collection('items');

        itemCollection.get().then(querySnapshot => {
            if (querySnapshot.size === 0) {
              console.log('No results');
              setLoading(true);
            }
            setItems(querySnapshot.docs.map(doc => doc.data()));
            setLoading(true);

        });
    },[]);

    if(loading===false){
        return <Spinner />;
    }else{
        return(
            <div  className="row">
                {items.map((element,i) =>{
                    if(element.category == {category}.category){
                        return (
                           
                                <div className="col-4 row__itemlist" key={i}>
                                    <Item  id={element.id} name={element.name} value = {element.value} stock={element.stock} img ={element.img} description ={element.description}/>
                                </div> 
                        );}
                    if('0' === {category}.category ||  {category}.category === undefined){
                        return (
                                <div className="col-4 row__itemlist" key={i}>
                                    <Item  id={element.id} name={element.name} value = {element.value} stock={element.stock} img ={element.img} description ={element.description}/>
                                </div>
                        );}
                })}
            </div>
        )
    }
}


export default ItemList;