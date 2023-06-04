import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img
              className="header__logo"
              src="../../img/logo1.png"
              alt="logo"
            />
          </div>
          <div className="nav-elements">
            <ul>
              <li>
                <a href="#">Capilares</a>
              </li>
              <li>
                <a href="#">Faciales</a>
              </li>
              <li>
                <a href="#">Corporales</a>
              </li>
      <CartWidget />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
