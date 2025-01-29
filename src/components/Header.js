import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import userContext from "../utils/userContext";

let Header = () => {
  let [buttonName, setButtonName] = useState("Login");
  let {loggedInUser} = useContext(userContext);
  // console.log(loggedInUser); 

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
      <div className="flex justify-center gap-x-2">
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
      <span className="self-center font-semibold">{loggedInUser}</span>
      </div>
    </div>
    
  );
};

export default Header;
