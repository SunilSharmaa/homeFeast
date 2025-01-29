import { useContext } from "react";
import { CDN_LINKS } from "../utils/constant";
import userContext from "../utils/userContext";

let HotelCard = (props) => {
  let {
    cloudinaryImageId,
    name,
    avgRating,
    sla: { deliveryTime },
    cuisines,
    areaName,
  } = props?.hotels.info;

  let userName = useContext(userContext);
  console.log(userName);
  return (
    <div className="w-72 hover:scale-95 duration-200">
      <div className="">
        <img className=" min-w-72 object-center h-44 object-cover rounded-2xl" src={CDN_LINKS + cloudinaryImageId} alt="kfc"></img>
      </div>

      <div className="card-content px-2">
        <h2 className="mt-2 text-lg font-semibold leading-tight tracking-tighter">{name}</h2>
        <div className="mt-0">
        <span className="ratings font-semibold text-sm">{avgRating}</span>{" - "}
        <span className="delivery-time font-semibold text-sm">{deliveryTime} min</span>
        </div>
        <p className="cuisine font-normal text-gray-500 tracking-tighter">{cuisines.join(", ")}</p>
        <p className="location font-normal text-gray-500 tracking-tighter">{areaName}</p>
        <p className="location  text-gray-500 tracking-tighter font-semibold">{userName}</p>
      </div>
    </div>
  );
};

export default HotelCard;
