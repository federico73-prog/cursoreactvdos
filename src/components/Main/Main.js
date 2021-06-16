//import logo from './logo.svg';
import './Main.css';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function Main() {
  return (
          <div className="container">
               <NavBar />
               <hr />
              <ItemListContainer />
              <ItemDetailContainer/>
               
          </div>
    ); 
}

export default Main;
