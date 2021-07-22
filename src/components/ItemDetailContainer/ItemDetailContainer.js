

import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../factory/firebase.js';

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const [loading,setLoading] = useState(false);
    const {id} = useParams();

    useEffect(  () => {
        //console.log(id);
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const item = itemCollection.doc(id);

        item.get().then(doc => {
            
            if (!doc.exists) {
              console.log('Item no encontrado');
              setLoading(true);
              return;
            }
            console.log('Item encontrado');
            setItems([{ id: doc.id, ...doc.data() }]);
           
            setLoading(true);
          })
          .catch(error => {
            console.log(error);
            setLoading(true);
          });
    },[])

    
    if(loading===false){
        return <Spinner />;
    }
    else{
        return (
            <div className="container">   
            {items.map(element => {
                return (
                    <div className="container-fluid container__IDT">
                        <ItemDetail  id = {element.id} name={element.name} value = {element.value} stock = {element.stock}  description = {element.description} img={element.img}/>
                    </div>);
            })}
                </div>
        );
    }
};

export default ItemDetailContainer;