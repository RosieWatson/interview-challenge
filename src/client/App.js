import React, { useEffect, useState } from "react";
import "./App.css";
import MenuPreview from "./components/MenuPreview";
import Sidebar from "./components/Sidebar";

export default () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [dietaryNumbers, setDietaryNumbers] = useState({});

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/items");
        const result = await response.json();
        setItems(result.items);
      } catch (error) {
        console.log("Error: ", error); // would usually handle rather than just logging
      }
    };

    fetchItems();
  }, []);

  const diets = ["v", "ve", "df", "gf", "n!", "rsf"];

  useEffect(() => {
    let dietNumbers = {};

    selectedItems.map((item) => {
      const fullItem = items.find((i) => i.id === item);
      fullItem.dietaries.map((diet) => {
        const count = dietNumbers[diet] ? dietNumbers[diet] + 1 : 1;

        dietNumbers = {
          ...dietNumbers,
          [diet]: count,
        };
      });
    });

    setDietaryNumbers(dietNumbers);
  }, [selectedItems]);

  const addItemToMenu = (item) => {
    if (selectedItems.includes(item.id)) return;
    setSelectedItems([...selectedItems, item.id]);
  };

  const removeItemFromMenu = (item) => {
    const itemIndex = selectedItems.indexOf(item);

    if (itemIndex > -1) {
      const newItems = [...selectedItems];
      newItems.splice(itemIndex, 1);
      setSelectedItems(newItems);
    }
  };

  return (
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>{selectedItems.length} items</span>
            </div>
            <div className="col-6 menu-summary-right">
              {diets.map((diet) => {
                if (!dietaryNumbers[diet]) return null;
                return (
                  <React.Fragment key={diet}>
                    {dietaryNumbers[diet]}x{" "}
                    <span className="dietary">{diet}</span>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container menu-builder">
        <div className="row">
          <Sidebar items={items} addItemToMenu={addItemToMenu} />
          <MenuPreview
            items={items}
            selectedItems={selectedItems}
            removeItem={removeItemFromMenu}
          />
        </div>
      </div>
    </div>
  );
};
