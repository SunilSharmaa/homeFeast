import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

let Header = () => {
  let [buttonName, setButtonName] = useState("Login");

  return (
    <div className="nav-bar">
      <img className="logo" src={LOGO_URL} alt="logo image"></img>

      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Food</li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
        <span>|</span>
        <button
          className="login-logout-btn"
          onClick={() => {
            buttonName === "Login"
              ? setButtonName("Logout")
              : setButtonName("Login");
          }}
        >
          {buttonName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
