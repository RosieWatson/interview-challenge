import React from "react";

const MenuItem = ({ item, canRemove, onClick, removeOnClick }) => (
  <li className="item" onClick={onClick}>
    <h2>{item.name}</h2>
    <p>
      {item.dietaries.map((diet) => (
        <span className="dietary" key={diet}>
          {diet}
        </span>
      ))}
    </p>
    {canRemove && (
      <button className="remove-item" onClick={removeOnClick} type="button">
        x
      </button>
    )}
  </li>
);

export default MenuItem;
