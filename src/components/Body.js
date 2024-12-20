import SearchBar from "./SearchBar";
import HotelCard from "./HotelCard";
import HOTEL_LIST from "../utils/dummyData";

let Body = ()=> {
    return (
        <>
            <SearchBar />
            <div className="hotel-container">
                {HOTEL_LIST.map((hotel)=> <HotelCard key={hotel.info.id}  hotels={hotel} />)}
            </div>
        </>
    )
}

export default Body;