//import logo from './logo.svg';
import './NavBar.css';
import CartWidget from './CartWidget';
import logo from '../../assets/img/logo.JPG';

const NavBar = () =>  {
  return (
    <div className="container d-flex">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><img className = "logo__nav" alt="logo" src={logo}></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ul__nav">
                    <li className="nav-item active li__nav">
                        <a className="nav-link" href="#">Inicio <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item li__nav">
                        <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item dropdown li__nav">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Productos
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Papel</a>
                            <a className="dropdown-item" href="#">Carton</a>
                            <a className="dropdown-item" href="#">Plastico</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Otros</a>
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
