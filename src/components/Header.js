import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

let Header = () => {
  let [buttonName, setButtonName] = useState("Login");

  return (
    <div className="flex justify-between px-20 shadow-lg">
      <div className="overflow-hidden">
      <img
        className="logo w-16 object-contain "
        src={LOGO_URL}
        alt="logo image"
      ></img>
      </div>

      <ul className="nav-items flex items-center gap-x-6">
        <li >
          <Link to="/" className=" hover:font-semibold">Home</Link>
        </li>
        <li>Food</li>
        <li>
          <Link to="/about" className=" hover:font-semibold">About Us</Link>
        </li>
        <li>
          <Link to="/contact" className=" hover:font-semibold">Contact</Link>
        </li>
        <li>
          <Link to="/privacy" className=" hover:font-semibold">Privacy</Link>
        </li>
        
      </ul>
      <button
            className="login-logout-btn hover:font-semibold"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
    </div>
  );
};

export default Header;
