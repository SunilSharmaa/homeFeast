import SearchBar from "./SearchBar";
import HotelCard from "./HotelCard";
// import dummyData from "../utils/dummyData";
import { useState, useEffect } from "react";

let Body = () => {
  let [hotelList, setHotelList] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2506699&lng=77.4348524&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let json = await data.json();

    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setHotelList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    // console.log(dummyData);
  };

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
        {hotelList?.map((hotel) => (
          <HotelCard key={hotel.info.id} hotels={hotel} />
        ))}
      </div>
    </>
  );
};

export default Body;
