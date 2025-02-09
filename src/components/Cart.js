import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

let Cart = () => {
  let cart = useSelector((store) => store.cart.items);
  cart.map((item) => console.log(item));
  let dispatch = useDispatch();
  let handleClearCart = ()=> {
    dispatch(clearCart())
  }
  
  return (
    <div className="flex flex-col">
      <h1 className="my-4 text-center text-2xl font-semibold mb-16">Cart</h1>

      <div className="flex flex-col justify-center">
        {cart.map((item, index) => {
          let { name, price, defaultPrice } = item.card.info;
          price = price || defaultPrice
          return (
            <div
              key={item.card.info.id}
              className="flex w-[50%] justify-between border mx-auto p-4 gap-x-4"
            >
              <p className="">
                {index + 1}. {name}
              </p>
              <p className="">{price / 100}/-</p>
            </div>
          );
        })}
      </div>

      {cart.length === 0 && <p className="font-semibold text-center">cart is empty, add some item to cart.</p>}

      {cart.length !== 0 && (
        <button className="py-2 px-4 rounded mx-auto bg-red-500 text-white uppercase text-sm mt-4 font-semibold mb-4"
        onClick={handleClearCart}>
            clear cart</button>)}
    </div>
  );
};

export default Cart;
