import React, {  useState } from 'react';
import './ItemDetail.css';
import Counter from '../Counter/Counter';

const ItemDetail = ({name, value, stock, img, description}) => {
    
    const [isClicked, setIsClicked] = useState(false);

    const onAdd = (cantidadItemCarrito) =>{   
        if(cantidadItemCarrito > 0){
            setIsClicked(true);
            alert("Se agregaron " + cantidadItemCarrito + "  productos al carrito");
        }
        else{
            alert("Ingrese cantidad");
        }   
    } 
    
    return (
        <div>
                <p className="title__item"> {name}</p>
                <div className="container">
                    <div className="row">
                        <div className="col-lg">
                            <img className="img__item__detail" src={img}/>
                        </div>
                        <div className=" col-sm div__item div__detalle_producto ">
                            <div className="div__info_producto">
                                <p><b>Precio </b>: $ {value},00</p>
                                <p><b>Stock</b>: {stock}</p>
                                <p><b>Descripcion</b>: {description}</p>
                            </div>

                            {isClicked ? <button>Terminar Compra</button> : <Counter initial={0} stock = {stock} onAdd = {onAdd}/>}
                                       
                            

                        </div>  
                       
                    </div>
                </div>
        </div>
        
    );
};

export default ItemDetail;