import { MENU_API } from "./constant";
import { useEffect, useState } from "react";

let useHotelMenu = (resId)=> {
    let [menuItems, setMenuItems] = useState(null)

    useEffect(()=> {
            getMenu();
        },[])
    
    let getMenu = async ()=> {
            console.log(MENU_API + resId);
            let data = await fetch(MENU_API + resId);
            let json = await data.json();
            setMenuItems(json)
        }
    
    return menuItems;
}

export default useHotelMenu;