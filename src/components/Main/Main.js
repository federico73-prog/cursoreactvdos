//import logo from './logo.svg';
import './Main.css';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function Main() {
  return (
          <div className="container">
               <NavBar />
               <hr />
              <ItemListContainer />
               
          </div>
    ); 
}

export default Main;
