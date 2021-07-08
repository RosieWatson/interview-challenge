import React from "react";

const Sidebar = ({ items }) => (
  <div className="col-4">
    <div className="filters">
      <input className="form-control" placeholder="Name" />
    </div>
    <ul className="item-picker">
      {items.map((item) => (
        <li className="item" key={item.id}>
          <h2>{item.name}</h2>
          <p>
            {item.dietaries.map((diet) => (
              <span className="dietary" key={diet}>
                {diet}
              </span>
            ))}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
