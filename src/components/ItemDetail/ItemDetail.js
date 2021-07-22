import React, {  useState , useContext } from 'react';
import './ItemDetail.css';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const ItemDetail = ({id, name, value, stock, description,img}) => {
    
    const [isClicked, setIsClicked] = useState(false);
    const { addToCache  } = useContext(CartContext);

   

    const onAdd = (cantidadItemCarrito) =>{   
        if(cantidadItemCarrito > 0){
            //refreshQuantity(cantidadItemCarrito);
            setIsClicked(true);
            alert("Se agregaron " + cantidadItemCarrito + "  productos al carrito");
            addToCache({ id: id , name: name , value: value, cantidadItemCarrito: cantidadItemCarrito});
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
                                {isClicked && <Link to = {`/Cart`}><button  className="btn__terminarCompra btn btn-secondary">Terminar Compra</button></Link>} 
                                {!isClicked && <Counter initial={0} stock = {stock} onAdd = {onAdd}/>}
                            </div>
                        </div>  
                       
                    </div>
                </div>
        </div>
        
    );
};

export default ItemDetail;