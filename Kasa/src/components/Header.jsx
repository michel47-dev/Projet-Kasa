import logo from "../assets/LOGO.png";
import { NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="Logo Kasa" />
            <nav className="header__nav">
                <NavLink className="header__link active" to="/">
                Accueil 
                </NavLink>
                <NavLink className="header__link" to= "/about">
                A propos
                </NavLink>
            
            </nav>

        </div>
    )
}
export default Header