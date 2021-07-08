import React from "react";

const Sidebar = ({ items, addItemToMenu }) => (
  <div className="col-4">
    <div className="filters">
      <input className="form-control" placeholder="Name" />
    </div>
    <ul className="item-picker">
      {items.map((item) => {
        const addItem = () => addItemToMenu(item.id);
        return (
          <li className="item" key={item.id} onClick={addItem}>
            <h2>{item.name}</h2>
            <p>
              {item.dietaries.map((diet) => (
                <span className="dietary" key={diet}>
                  {diet}
                </span>
              ))}
            </p>
          </li>
        );
      })}
    </ul>
  </div>
);

export default Sidebar;
