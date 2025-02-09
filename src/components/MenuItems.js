import Item from "./Item";
let MenuItems = ({ menu, showMenu, setMenu}) => {
  let items = menu?.card?.card?.itemCards || [];

  return (
    <div className="mx-auto mb-4 w-6/12">
      <div
        className="flex cursor-pointer justify-between"
        onClick={setMenu}
      >
        <div>
          <span className="me-1 font-semibold">{menu?.card?.card?.title} </span>
          <span className="font-semibold">({items.length}) </span>
        </div>

        <div>
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </div>

      <div>
        {showMenu && <Item items={items} />
        
          }
      </div>

      <div className="mx-auto mt-4 h-3 w-full bg-gray-100"></div>
    </div>
  );
};

export default MenuItems;
