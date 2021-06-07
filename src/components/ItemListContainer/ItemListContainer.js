import Counter from '../Counter/Counter';
import './ItemListContainer.css';

const ItemListContainer = () =>{

    const onAdd = (amount) =>{   
        if(amount > 0){
            alert("Se agregaron " + amount + "  productos al carrito");
        }
        else{
            alert("Ingrese cantidad");
        }   
    } 

    return(
        <div>
              <Counter initial={0} stock = {10}  onAdd = {onAdd} />
        </div>
    );

};

export default  ItemListContainer;