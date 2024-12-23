import dummyData from "../utils/dummyData";
import { useState } from "react";

let FilterButton = () => {
  let [hotelList, setHotelList] = useState(dummyData);

  return (
    <button
      className="filter-btn"
      onClick={() => {
        let filteredList = hotelList.filter((hotel) => {
          return hotel.info.avgRating > 4.2;
        });

        setHotelList(filteredList);
      }}
    >
      Above 4 star rating
    </button>
  );
};

export default FilterButton;
