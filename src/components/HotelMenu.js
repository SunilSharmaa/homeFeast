import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
import ShimmerEffect from "./ShimmerEffect";
import { useParams } from "react-router";

let HotelMenu = ()=> {

    let [menuItems, setMenuItems] = useState(null)
    let {resId} = useParams();
    console.log(resId);

    useEffect(()=> {
        getMenu();
    },[])

    let getMenu = async ()=> {
        console.log(MENU_API + resId);
        let data = await fetch(MENU_API + resId);
        let json = await data.json();
        setMenuItems(json)
        // console.log(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards);
        let hotelName = json?.data?.cards[0]?.card?.card?.text
        let menuItems = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;

        // console.log(hotelName);
        // console.log(menuItems);
        
    }

    if(menuItems === null) return <ShimmerEffect />;

    let {text: hotelName} = menuItems?.data?.cards[0]?.card?.card;
    let {itemCards: menuItemsData} = menuItems?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // let {id} = menuItems?.data?.cards[2]?.card?.card?.info;
    // console.log(id);

    return (
        <div className="container">
        <h1>{hotelName}</h1><br />
        <h3>Menu:</h3><br />
        
        <ul>
            {
                menuItemsData.map((item)=> {
                    let {id} = item?.card?.info;
                    return <li key={id}>{item?.card?.info?.name}</li>
                })
            }
        </ul>
        </div>
    )
}

export default HotelMenu;