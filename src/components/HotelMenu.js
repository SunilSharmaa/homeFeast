import ShimmerEffect from "./ShimmerEffect";
import { useParams } from "react-router";
import useHotelMenu from "../utils/useHotelMenu";

let HotelMenu = () => {
  let { resId } = useParams();
  console.log(resId);

  let menuItems = useHotelMenu(resId);

  if (menuItems === null) return <ShimmerEffect />;

  let { text: hotelName } = menuItems?.data?.cards[0]?.card?.card;
  let { itemCards: menuItemsData } =
    menuItems?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2] 
      ?.card?.card;

  return (
    <div className="container">
      <h1>{hotelName}</h1>
      <br />
      <h3>Menu:</h3>
      <br />

      <ul>
        {menuItemsData.map((item) => {
          let { id } = item?.card?.info;
          return <li key={id}>{item?.card?.info?.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default HotelMenu;
