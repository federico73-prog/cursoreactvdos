import React, { useState } from 'react';
import CartContext from '../context/CartContext';
import firebase from 'firebase/app';

export default function CacheProvider({ defaultValue = [], children }) {
  const [cache, setCache] = useState(defaultValue);
  
  const [finalPrice, setFinalPrice] = useState(0);
  const [cantItemTotal, setCantItemTotal] = useState(0);

  function getFromCache(id) {
    return cache.find(x => x.id === id);
  }

  function isInCache({ id }) {
    return id === undefined ? undefined : getFromCache(id) !== undefined;
  }

  function clear() {
    setCache([]);
    setFinalPrice(0);
    setCantItemTotal(0);
  }

  function addToCache(obj) {

    if (isInCache(obj)) {
      setFinalPrice(finalPrice +(obj.value * obj.cantidadItemCarrito) );
      setCantItemTotal(cantItemTotal + obj.cantidadItemCarrito );
      console.log('Element already in cache store.');
      return;
    }
    else{
      setFinalPrice(finalPrice +(obj.value * obj.cantidadItemCarrito) );
      setCantItemTotal(cantItemTotal + obj.cantidadItemCarrito );
      setCache([...cache, obj]);
    }
  }

  function removeToCache(obj) {
    cache.map((element,i) =>{
      if(element.id == obj.id){
        cache.splice(i,1);
      }
    });
    setFinalPrice(finalPrice -(obj.value * obj.cantidadItemCarrito) );
    setCantItemTotal(cantItemTotal - obj.cantidadItemCarrito );
    setCache([...cache]);
  }
  return (
    <CartContext.Provider
      value={{clear,cache,finalPrice,cantItemTotal, addToCache,removeToCache, isInCache, cacheSize: cache.length }}
    >
      {children}
    </CartContext.Provider>
  );
}
