import logo from "../img/logo1.png";
import CartWidget from "./CartWidget";
 
export default function NavBar() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <img className="header__logo" src={logo} />
          <li className="header__item">
            <a href="# ">Capilares</a>  
          </li>
          <li className="header__item">
            <a href="# ">Faciales</a>  
          </li>
          <li className="header__item">
            <a href="# ">Corporales</a>  
          </li>
          
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}
