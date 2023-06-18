import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <>
            <nav className="navbar  ">
                <div className="container ">
                    <div className="logo">
                        s
                        <Link to="/">
                            <img
                                className="header__logo"
                                src="../../img/logo1.png"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className=" nav-elements ">
                        <ul>
                            <li>
                                <Link to="/productos">Todos Los Productos</Link>
                            </li>
                            <li>
                                <Link to="/category/capilares">Capilares</Link>
                            </li>
                            <li>
                                <Link to="/category/faciales">Faciales</Link>
                            </li>
                            <li>
                                <Link to="/category/corporales">
                                    Corporales
                                </Link>
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
