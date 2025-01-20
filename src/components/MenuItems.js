import { CDN_LINKS } from "../utils/constant";

let MenuItems = ({ menu }) => {
    // Safely access `itemCards`
    let items = menu?.card?.card?.itemCards || [];
  
    return (
      <div className="w-6/12 mx-auto mb-12">
        <div className="flex justify-between">
          <div>
            <span className="me-1 font-semibold">{menu?.card?.card?.title}</span>
            <span className="font-semibold">({items.length})</span>
          </div>
  
          <div>
            <span>^</span>
          </div>
        </div>
  
        <div>
          {items.map((item) => {
            let { name, description, price, defaultPrice, imageId } = item?.card?.info;
            price = price || defaultPrice; 
  
            return (
              <div className="mt-4 flex justify-between shadow-md p-4 py-4 rounded-2xl">
                <div className="w-[70%]">
                <p className="font-semibold text-gray-800 text-lg">{name}</p>
                <p className="font-semibold text-sm">₹{price/100}</p>
                <p className="mt-2 tracking-tight leading-tight text-base text-gray-500">{description}</p>
                </div>

                <div>
                    <img className="w-32 h-full object-cover rounded-2xl" src={CDN_LINKS + imageId} />
                </div>


              </div>
            );
          })}
        </div>

        <div className="w-6/12 bg-gray-200 h-2 mx-auto mt-4">

        </div>
      </div>
    );
  };
  
  export default MenuItems;
  