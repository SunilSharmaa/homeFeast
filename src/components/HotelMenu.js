import ShimmerEffect from "./ShimmerEffect";
import { useParams } from "react-router";
import useHotelMenu from "../utils/useHotelMenu";
import MenuItems from "./MenuItems";

let HotelMenu = () => {
  let { resId } = useParams();

  let menuItems = useHotelMenu(resId);

  if (menuItems === null) return <ShimmerEffect />;

  // console.log(menuItems);

  let { text: hotelName } = menuItems?.data?.cards[0]?.card?.card;
  let { itemCards: menuItemsData } =
    menuItems?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2] 
      ?.card?.card;
  let categories = (menuItems?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards 
    );
    // console.log(category);
  let categoryMenu = categories.filter((cat)=> {
    // console.log(cat.card.card["@type"]);
    if(cat.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") return true
  })

  
  // categoryMenu.map((cat)=> {
  //   console.log(cat);
  // })

  return (
    <div className=" mt-4">
      <h1 className="text-center text-2xl font-bold mb-4">{hotelName}</h1>

      <div>
        {categoryMenu.map((category)=> {
          // console.log(category?.card?.card?.title);
          return <MenuItems key={category?.card?.card?.title} menu={category}/>
        })}
      </div>
    </div>
  );
};

export default HotelMenu;
