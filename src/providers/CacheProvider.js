import React, { useState } from 'react';
import CartContext from '../context/CartContext';

export default function CacheProvider({ defaultValue = [], children }) {
  const [cache, setCache] = useState(defaultValue);

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
    setCache([...cache, obj]);
    console.log(cache);
    console.log(obj.name );
    console.log(obj.id);
    console.log(obj.cantidadItemCarrito);
  }
  return (
    <CartContext.Provider
      value={{ cache, addToCache, isInCache, cacheSize: cache.length }}
    >
      {children}
    </CartContext.Provider>
  );
}
