import { useState } from "react";
import { CDN_LINKS } from "../utils/constant";

let MenuItems = ({ menu }) => {
    // Safely access `itemCards`
    let items = menu?.card?.card?.itemCards || [];
    let [showMenu, setShowMenu] = useState(true);

    let handleClick= ()=> {
        setShowMenu(!showMenu)
    }
  
    return (
      <div className="w-6/12 mx-auto mb-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <div>
            <span className="me-1 font-semibold">{menu?.card?.card?.title}</span>
            <span className="font-semibold">({items.length})</span>
          </div>
  
          <div>
             <i class="fa-solid fa-angle-up"></i>
          </div>
        </div>
  
        <div>
          {showMenu && items.map((item) => {
                let { name, description, price, defaultPrice, imageId } = item?.card?.info;
                price = price || defaultPrice; 
      
                return (
                  <div className="mt-4 flex justify-between shadow-md p-4 py-4 rounded">
                    <div className="w-[70%]">
                    <p className="font-semibold text-gray-800 text-lg">{name}</p>
                    <p className="font-semibold text-sm">₹{price/100}</p>
                    <p className="mt-2 tracking-tight leading-tight text-base text-gray-500">{description}</p>
                    </div>
    
                    <div>
                        <img className="w-32 h-full object-cover rounded-2xl" src={CDN_LINKS + imageId} />
                    </div>
    
    
                  </div>
                );
              })
          }
        </div>

        <div className="w-full bg-gray-100 h-3 mx-auto mt-4"></div>
      </div>
    );
  };
  
  export default MenuItems;
  