import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  let renderApi;
  const addItemToMenuMock = jest.fn();

  const fakeItems = [
    {
      id: 14,
      name: "banana",
      dietaries: ["ve", "vg"],
    },
    {
      id: 3,
      name: "grape",
      dietaries: ["gf"],
    },
    {
      id: 7,
      name: "bread",
      dietaries: ["nf", "ve", "vg"],
    },
  ];

  beforeEach(() => {
    renderApi = render(
      <Sidebar items={fakeItems} addItemToMenu={addItemToMenuMock} />
    );
  });

  it("displays two menu items", () => {
    expect(screen.getAllByRole("listitem").length).toEqual(3);
  });

  describe("when the item button is pressed", () => {
    it("removes calls the add item to list", () => {
      fireEvent.click(screen.getAllByRole("listitem")[0]);

      expect(addItemToMenuMock).toHaveBeenCalled();
    });
  });
});
