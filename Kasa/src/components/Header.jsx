import logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="Logo Kasa" />
            <nav className="header__nav">
               
                <NavLink to="/" end className="header__link">
                    Accueil
                </NavLink>
               
                <NavLink to="/about" className="header__link">
                    A propos
                </NavLink>

            </nav>

        </div>
    )
}
export default Header