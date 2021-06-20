//import logo from './logo.svg';
import './NavBar.css';
import CartWidget from './CartWidget';
import logo from '../../assets/img/logo.JPG';
import { NavLink } from 'react-router-dom';

const NavBar = () =>  {
  return (
    <div className="container d-flex">
        <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink to={'/category/0'}><img className = "logo__nav" alt="logo" src={logo}></img></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ul__nav">
                    <li className="nav-item active li__nav">
                        <NavLink activeClassName="selected" exact to={'/category/0'} className="nav-link">Inicio <span className="sr-only"></span></NavLink>
                    </li>
                    <li className="nav-item li__nav">
                        <NavLink activeClassName="selected" exact to={'/productDetail/1'} className="nav-link">Nosotros</NavLink>
                    </li>
                    <li className="nav-item dropdown li__nav">
                        <NavLink  activeClassName="selected" exact to={'/category/0'}  className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Productos
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink  activeClassName="selected" exact to={'/category/1'}  className="dropdown-item" >Papel</NavLink>
                            <NavLink  activeClassName="selected" exact to={'/category/2'} className="dropdown-item" >Carton</NavLink>
                            <NavLink  activeClassName="selected" exact to={'/category/3'}  className="dropdown-item" >Plastico</NavLink>
                            <div className="dropdown-divider"></div>
                            <NavLink  activeClassName="selected" exact to={'/category/4'}  className="dropdown-item" >Otros</NavLink>
                        </div>
                    </li>
                </ul>
            </div>

            <CartWidget />
            
        </nav>
    </div>  
    ); 
}

export default NavBar;
