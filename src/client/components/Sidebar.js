import React from "react";
import MenuItem from "./MenuItem";

const Sidebar = ({ items, addItemToMenu, searchForItem }) => (
  <div className="col-4">
    <div className="filters">
      <input
        className="form-control"
        placeholder="Name"
        onChange={(e) => searchForItem(e.target.value)}
      />
    </div>
    <ul className="item-picker">
      {items &&
        items.map((item) => {
          const addItem = () => addItemToMenu(item);
          return (
            <MenuItem
              item={item}
              canRemove={false}
              onClick={addItem}
              key={item.id}
            />
          );
        })}
    </ul>
  </div>
);

export default Sidebar;
