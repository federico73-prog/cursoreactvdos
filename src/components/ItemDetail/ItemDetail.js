import React from 'react';
import './ItemDetail.css';
import Counter from '../Counter/Counter';

const ItemDetail = ({name, value, stock, img, description}) => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    
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
                            <Counter initial={0} stock = {stock}/>
                        </div>  
                    </div>
                </div>
        </div>
    );
};

export default ItemDetail;