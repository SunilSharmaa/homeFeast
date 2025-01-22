import { CDN_LINKS } from "../utils/constant";

let Item = ({items})=> {
    return (
        items.map((item) => {
            let { name, description, price, defaultPrice, imageId, id } =
              item?.card?.info;
            price = price || defaultPrice;

            return (
              <div key={id} className="mt-4 flex justify-between rounded p-4 py-4 shadow-md">
                <div className="w-[70%]">
                  <p className="text-lg font-semibold text-gray-800">{name}</p>
                  <p className="text-sm font-semibold">₹{price / 100}</p>
                  <p className="mt-2 text-base leading-tight tracking-tight text-gray-500">
                    {description}
                  </p>
                </div>

                <div>
                  <img
                    className="h-full min-h-36 w-32 rounded-2xl object-cover"
                    src={CDN_LINKS + imageId}
                  />
                </div>
              </div>
            );
          })
    )
}

export default Item;