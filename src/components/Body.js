import SearchBar from "./SearchBar";
import HotelCard from "./HotelCard";
import dummyData from "../utils/dummyData";
import FilterButton from "./FilterButton";

let Body = () => {
  return (
    <>
      <SearchBar />
      <FilterButton />
      <div className="hotel-container">
        {dummyData.map((hotel) => (
          <HotelCard key={hotel.info.id} hotels={hotel} />
        ))}
      </div>
    </>
  );
};

export default Body;
