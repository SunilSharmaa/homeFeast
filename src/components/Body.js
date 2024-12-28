import HotelCard from "./HotelCard";
import ShimmerEffect from "./ShimmerEffect";
import { useState, useEffect } from "react";

let Body = () => {
  let [hotelList, setHotelList] = useState([]);
  let [filteredHotelList, setFilteredHotelList] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let data = await fetch(
      "https://proxy.cors.sh/" + "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2506699&lng=77.4348524&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let json = await data.json();

    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setHotelList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredHotelList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (hotelList?.length === 0) {
    console.log("hello");
    return (
      <>
        <div className="shimmer-container">
          {<ShimmerEffect />}
          {<ShimmerEffect />}
          {<ShimmerEffect />}
          {<ShimmerEffect />}
          {<ShimmerEffect />}
          {<ShimmerEffect />}
          {<ShimmerEffect />}
          {<ShimmerEffect />}
          {<ShimmerEffect />}
          {<ShimmerEffect />}
          {<ShimmerEffect />}
          {<ShimmerEffect />}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="tools-container">
      <>
        <input 
        type="text" 
        className="search-bar" 
        value={searchText} 
        onChange={(e)=> {
            setSearchText(e.target.value)
        }}/>
        <button className="search-button"
        onClick={()=> {
            let filteredHotels = hotelList.filter((hotels)=> {
              if(hotels?.info?.name.toLowerCase().includes(searchText.toLowerCase())) return true;

            })
            console.log(filteredHotels);
            setFilteredHotelList(filteredHotels);
        }}>search</button>
        </>

      <button
        className="filter-btn"
        onClick={() => {
          let filteredList = hotelList.filter((hotel) => {
            return hotel.info.avgRating > 4.2;
          });

          setFilteredHotelList(filteredList);
        }}
      >
        Above 4 star rating
      </button>
      </div>

      <div className="hotel-container">
        {filteredHotelList?.map((hotel) => (
          <HotelCard key={hotel.info.id} hotels={hotel} />
        ))}
      </div>
    </>
  );
};

export default Body;
