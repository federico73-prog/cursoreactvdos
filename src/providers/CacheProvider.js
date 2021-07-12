import React, { useState } from 'react';
import CartContext from '../context/CartContext';

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
  }

  function addToCache(obj) {
    if (isInCache(obj)) {
      
      console.log('Element already in cache store.');
      return;
    }
    setFinalPrice(finalPrice +(obj.value * obj.cantidadItemCarrito) );
    setCantItemTotal(cantItemTotal + obj.cantidadItemCarrito );
    setCache([...cache, obj]);
  }

  function removeToCache(obj) {
    cache.map((element,i) =>{
      if(element.id == obj.id){
        console.log(i + "cartnumber")
        cache.splice(i,1);
      }
    });
    setFinalPrice(finalPrice -(obj.value * obj.cantidadItemCarrito) );
    setCantItemTotal(cantItemTotal - obj.cantidadItemCarrito );
    setCache([...cache]);
  }


  return (
    <CartContext.Provider
      value={{ cache,finalPrice,cantItemTotal, addToCache,removeToCache, isInCache, cacheSize: cache.length }}
    >
      {children}
    </CartContext.Provider>
  );
}
