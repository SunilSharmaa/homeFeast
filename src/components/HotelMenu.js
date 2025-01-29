import ShimmerEffect from "./ShimmerEffect";
import { useParams } from "react-router";
import useHotelMenu from "../utils/useHotelMenu";
import MenuItems from "./MenuItems";
import { useState } from "react";

let HotelMenu = () => {
  let { resId } = useParams();

  let menuItems = useHotelMenu(resId);
  let [showMenu, setShowMenu] = useState(0);

  if (menuItems === null) return <ShimmerEffect />;

  let { text: hotelName } = menuItems?.data?.cards[0]?.card?.card;
  let categories =
    menuItems?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  let categoryMenu = categories.filter((cat) => {
    if (
      cat.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
      return true;
  });

  return (
    <div className="mt-4">
      <h1 className="mb-4 text-center text-2xl font-bold">{hotelName}</h1>

      <div>
        {categoryMenu.map((category, index) => {
          return (
            <MenuItems 
            key={category?.card?.card?.title} 
            menu={category} 
            showMenu={showMenu === index ? true : false} 
            setMenu={()=>setShowMenu(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HotelMenu;
