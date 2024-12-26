import { CDN_LINKS } from "../utils/constant";

let HotelCard = (props) => {
  let {
    cloudinaryImageId,
    name,
    avgRating,
    sla: { deliveryTime },
    cuisines,
    areaName,
  } = props?.hotels.info;

  return (
    <div className="hotel-card">
      <div className="img-container">
        <img src={CDN_LINKS + cloudinaryImageId} alt="kfc"></img>
      </div>

      <div className="card-content">
        <h2 className="hotel-name">{name}</h2>
        <span className="ratings">{avgRating}</span>{" "}
        <span className="delivery-time">{deliveryTime} min</span>
        <p className="cuisine">{cuisines.join(", ")}</p>
        <p className="location">{areaName}</p>
      </div>
    </div>
  );
};

export default HotelCard;
