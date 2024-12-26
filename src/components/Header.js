import { LOGO_URL } from "../utils/constant";

let Header = ()=> {
    return (
        <div className="nav-bar">
            <img className="logo" src={LOGO_URL} alt="logo image"></img>

            <ul className="nav-items">
                <li>Home</li>
                <li>Food</li>
                <li>About Us</li>
                <li>Contact</li>
                <span>|</span>
                
            </ul>
        </div>
    )
}

export default Header;