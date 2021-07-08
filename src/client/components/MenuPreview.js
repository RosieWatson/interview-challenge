import React from "react";

import MenuItem from "./MenuItem";

const MenuPreview = ({ items, selectedItems, removeItem }) => (
  <div className="col-8">
    <h2>Menu preview</h2>
    <ul className="menu-preview">
      {items.map((item) => {
        const isSelected = selectedItems.includes(item.id);
        const remove = () => removeItem(item.id);
        return isSelected ? (
          <MenuItem
            item={item}
            canRemove
            removeOnClick={remove}
            key={item.id}
          />
        ) : null;
      })}
    </ul>
  </div>
);

export default MenuPreview;
