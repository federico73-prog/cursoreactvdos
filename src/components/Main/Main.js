//import logo from './logo.svg';
import './Main.css';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function Main() {
  return (
          <div class="container">
               <NavBar />
               <hr />
              <ItemListContainer greeting = "ACA IRA NUESTRO CATALOGO"  />
              <ItemListContainer greeting = "ACA IRA NUESTRO CATALOGO"  />
               
          </div>
    ); 
}

export default Main;
