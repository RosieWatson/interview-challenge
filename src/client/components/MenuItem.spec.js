import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import MenuItem from "./MenuItem";

describe("MenuItem", () => {
  let renderApi;

  const onClickMock = jest.fn();
  const onRemoveClickMock = jest.fn();

  const fakeItem = {
    id: 14,
    name: "banana",
    dietaries: ["ve", "vg"],
  };

  beforeEach(() => {
    renderApi = render(
      <MenuItem
        item={fakeItem}
        canRemove
        onClick={onClickMock}
        removeOnClick={onRemoveClickMock}
      />
    );
  });

  it("displays the food name", () => {
    expect(screen.getByText("banana")).toBeInTheDocument();
  });

  it("displays the allergens", () => {
    expect(screen.getByText("ve")).toBeInTheDocument();
    expect(screen.getByText("vg")).toBeInTheDocument();
  });

  describe("when the item is pressed", () => {
    it("calls the onClick function", () => {
      fireEvent.click(screen.getByRole("listitem"));

      expect(onClickMock).toHaveBeenCalled();
    });
  });

  describe("when it can be removed", () => {
    it("displays the remove button", () => {
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    describe("when the button is pressed", () => {
      it("calls the remove function", () => {
        fireEvent.click(screen.getByRole("button"));

        expect(onRemoveClickMock).toHaveBeenCalled();
      });
    });
  });

  describe("when it can't be removed", () => {
    beforeEach(() => {
      renderApi.rerender(
        <MenuItem item={fakeItem} canRemove={false} onClick={onClickMock} />
      );
    });

    it("doesn't displays the remove button", () => {
      expect(screen.queryByRole("button")).toBeNull();
    });
  });
});
