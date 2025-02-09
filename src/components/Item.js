import { useDispatch } from "react-redux";
import { CDN_LINKS } from "../utils/constant";
import { addItems } from "../redux/cartSlice";

let Item = ({ items }) => {
  console.log(items);
  let dispatch = useDispatch();
  let handleAddItem = (item) => {
    dispatch(addItems(item));
  };
  return items.map((item) => {
    let { name, description, price, defaultPrice, imageId, id } =
      item?.card?.info;
    price = price || defaultPrice;

    return (
      <div
        key={id}
        className="mt-4 flex justify-between rounded p-4 py-8 shadow-md"
      >
        <div className="w-[70%]">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <p className="text-sm font-semibold">₹{price / 100}</p>
          <p className="mt-2 text-sm leading-tight tracking-tight text-gray-500">
            {description}
          </p>
        </div>

        <div className="relative">
          <img
            className="h-full min-h-36 w-32 rounded-2xl object-cover"
            src={CDN_LINKS + imageId}
          />
          <button
            className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2 rounded border border-gray-400 bg-white px-4 font-bold uppercase text-green-600"
            onClick={() => handleAddItem(item)}
          >
            Add
          </button>
        </div>
      </div>
    );
  });
};

export default Item;
