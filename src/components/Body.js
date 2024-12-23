import SearchBar from "./SearchBar";
import HotelCard from "./HotelCard";
import dummyData from "../utils/dummyData";
import { useState } from "react";

let Body = () => {
  let [hotelList, setHotelList] = useState(dummyData);
  return (
    <>
      <SearchBar />
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

      <div className="hotel-container">
        {hotelList.map((hotel) => (
          <HotelCard key={hotel.info.id} hotels={hotel} />
        ))}
      </div>
    </>
  );
};

export default Body;
