import React, { useEffect, useState } from "react";
import "./App.css";
import MenuPreview from "./components/MenuPreview";
import Sidebar from "./components/Sidebar";

export default () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/items");
        const result = await response.json();
        console.log(result);
        setItems(result.items);
      } catch (error) {
        console.log("Error: ", error); // would usually handle rather than just logging
      }
    };

    fetchItems();
  }, []);

  const addItemToMenu = (item) => {
    if (selectedItems.includes(item)) return;
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>6 items</span>
            </div>
            <div className="col-6 menu-summary-right">
              6x <span className="dietary">ve</span>
              4x <span className="dietary">v</span>
              12x <span className="dietary">n!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container menu-builder">
        <div className="row">
          <Sidebar items={items} addItemToMenu={addItemToMenu} />
          <MenuPreview items={items} selectedItems={selectedItems} />
        </div>
      </div>
    </div>
  );
};
