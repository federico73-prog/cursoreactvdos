
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';
import './ItemList.css';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../factory/firebase.js';


const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading,setLoading] = useState(true);
    const { category } = useParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
    
    useEffect(  () => {
        const db = getFirestore();
        const itemCollection = db.collection('items');

        itemCollection.get().then(querySnapshot => {
            if (querySnapshot.size === 0) {
              console.log('No results');
              setLoading(false);
            }
            setItems(querySnapshot.docs.map(doc => doc.data()));
            setLoading(false);
            console.log(items)

        });
    },[]);


        return(
            <div className="row">
                {loading && <Spinner />}
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
                })};
            
            </div>
        );
};


export default ItemList;