import React from "react";
import ReactDOM from "react-dom/client";

let Header = ()=> {
    return (
        <div className="nav-bar">
            <img className="logo" src="https://img.freepik.com/premium-vector/food-logo-vector-illustration_943898-19509.jpg?semt=ais_hybrid" alt="logo image"></img>

            <ul className="nav-items">
                <li>Home</li>
                <li>Food</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

let SearchBar = ()=> {
    return (
        <div className="search-bar"></div>
    )
}

let HotelCard = (props)=> {
    return (
        <div className="hotel-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/2873b44d-0ca9-47b5-a0ac-43b9d31f4719_425509.JPG" alt="kfc"></img>

            <h2>{props.name}</h2>
            <span className="ratings">4.2</span> <span className="delivery-time">15-20 min</span>
            <p className="cuisine">{props.cuisine}</p>
            <p className="location">BHEL</p>
        </div>
    )
}

let Body = ()=> {
    return (
        <>
            <SearchBar />
            <div className="hotel-container">
                <HotelCard
                name="KFC"
                cuisine="Burger, Fast Foods" />

                <HotelCard
                name="MCD"
                cuisine="Fries, Burger" />
            </div>
        </>
    )
}

let Layout = ()=> {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
}

let root = ReactDOM.createRoot(document.getElementById("layout"));
root.render(<Layout />);