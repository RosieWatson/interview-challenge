import React from "react";

const MenuPreview = ({ items, selectedItems }) => (
  <div className="col-8">
    <h2>Menu preview</h2>
    <ul className="menu-preview">
      {items.map((item) => {
        const isSelected = selectedItems.includes(item.id);
        return isSelected ? (
          <li className="item" key={item.id}>
            <h2>{item.name}</h2>
            <p>
              {item.dietaries.map((diet) => (
                <span className="dietary" key={diet}>
                  {diet}
                </span>
              ))}
            </p>
            <button className="remove-item">x</button>
          </li>
        ) : null;
      })}
    </ul>
  </div>
);

export default MenuPreview;
