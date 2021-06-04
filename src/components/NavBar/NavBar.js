//import logo from './logo.svg';
import './NavBar.css';
import CartWidget from './CartWidget';
import logo from '../../assets/img/logo.JPG';

const NavBar = () =>  {
  return (
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#"><img class = "logo__nav" alt="logo" src={logo}></img></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto ul__nav">
                    <li class="nav-item active li__nav">
                        <a class="nav-link" href="#">Inicio <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item li__nav">
                        <a class="nav-link" href="#">Nosotros</a>
                    </li>
                    <li class="nav-item dropdown li__nav">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Productos
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Papel</a>
                            <a class="dropdown-item" href="#">Carton</a>
                            <a class="dropdown-item" href="#">Plastico</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Otros</a>
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
