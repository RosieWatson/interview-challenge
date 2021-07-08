import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import MenuPreview from "./MenuPreview";

describe("MenuPreview", () => {
  let renderApi;
  const onRemoveClickMock = jest.fn();

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
  const fakeSelected = [7, 14];

  beforeEach(() => {
    renderApi = render(
      <MenuPreview
        items={fakeItems}
        selectedItems={fakeSelected}
        removeItem={onRemoveClickMock}
      />
    );
  });

  it("displays two menu items", () => {
    expect(screen.getAllByRole("listitem").length).toEqual(2);
  });

  describe("when the remove button is pressed", () => {
    it("removes the item from the list", () => {
      fireEvent.click(screen.getAllByRole("button")[0]);

      expect(onRemoveClickMock).toHaveBeenCalled();
    });
  });
});
