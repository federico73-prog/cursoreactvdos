//import logo from './logo.svg';
import './Main.css';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Cart from '../Cart/Cart';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function Main() {
  return (
          <div className="container">
            <BrowserRouter>
            <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <hr />
                        <ItemListContainer />
                    </Route>
                    <Route exact path="/category/:category">
                        <hr />
                        <ItemListContainer />
                    </Route>
                    <Route exact path="/productDetail/:id">
                        <ItemDetailContainer />
                    </Route>
                    <Route exact path="/Cart">
                        <Cart />
                    </Route>
                </Switch>
            </BrowserRouter>
          </div>
    ); 
}

export default Main;
