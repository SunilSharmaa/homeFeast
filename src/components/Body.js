import { HOTELS_API } from "../utils/constant";
import HotelCard from "./HotelCard";
import ShimmerEffect from "./ShimmerEffect";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

let Body = () => {
  let [hotelList, setHotelList] = useState([]);
  let [filteredHotelList, setFilteredHotelList] = useState([]);
  let [searchText, setSearchText] = useState("");
  let {loggedInUser, setUserName} = useContext(userContext);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let data = await fetch(HOTELS_API);
    let json = await data.json();

    setHotelList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredHotelList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  let onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    console.log(onlineStatus);
    return <h1>Internet gone.......</h1>;
  }



  if (hotelList?.length === 0) {
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
    );
  }

  return (
    <>
      <div className="mt-4 flex gap-x-8 px-20">
        <div className="flex gap-x-1">
          <input
            type="text"
            className="rounded border-2 border-solid border-gray-300"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <input
            type="text"
            className="rounded border-2 border-solid border-gray-300"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <button
            className=" bg-slate-700 text-white px-3  rounded-md"
            onClick={() => {
              let filteredHotels = hotelList.filter((hotels) => {
                if (
                  hotels?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
                  return true;
              });
              console.log(filteredHotels);
              setFilteredHotelList(filteredHotels);
            }}
          >
            search
          </button>
        </div>

        <button
          className=" bg-slate-700 text-white px-3  rounded-md"
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

      <div className="hotel-container px-20 mt-8 flex flex-wrap gap-x-10 gap-y-6">
        {filteredHotelList?.map((hotel) => {
          return (
            <Link to={"hotels/" + hotel?.info?.id} key={hotel.info.id}>
              <HotelCard hotels={hotel} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
