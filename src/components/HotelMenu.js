import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
import ShimmerEffect from "./ShimmerEffect";

let HotelMenu = ()=> {

    let [menuItems, setMenuItems] = useState(null)

    useEffect(()=> {
        getMenu();
    },[])

    let getMenu = async ()=> {
        let data = await fetch(MENU_API);
        let json = await data.json();
        setMenuItems(json)
        // console.log(json?.data?.cards);
        let hotelName = json?.data?.cards[0].card.card.text
        let menuItems = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;

        // console.log(hotelName);
        // console.log(menuItems);
        
    }

    if(menuItems === null) return <ShimmerEffect />;

    let {text: hotelName} = menuItems?.data?.cards[0].card.card;
    let {itemCards: menuItemsData} = menuItems?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="container">
        <h1>{hotelName}</h1><br />
        <h3>Menu:</h3><br />
        
        <ul>
            {
                menuItemsData.map((item)=> {
                    return <li>{item.card.info.name}</li>
                })
            }
        </ul>
        </div>
    )
}

export default HotelMenu;