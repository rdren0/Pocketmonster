import React from "react";
import ReactDOM from "react-dom";
import App, { mapStateToProps, mapDispatchToProps } from "./App";
import { gatherPokemon } from "./Actions/index";
import { anError } from "./Actions/index";
import { loading } from "./Actions/index";

it.skip("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe("MSTP", () => {
  const mockState = {
    pokemon: [{ id: "pikachu" }, { id: "bulbasaur" }],
    isLoading: false,
    error: false,
    pretendState: "This isnt a real state"
  };
  const expected = {
    pocketmonsters: [{ id: "pikachu" }, { id: "bulbasaur" }],
    isLoading: false,
    error: false
  };
  it("should set props as an object with the object from state", () => {
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});


describe("MDTP", () => {
  const mockDistpatch = jest.fn();

  it("should call dispatch on gatherPokemon", () => {
    const mockState = {
      pocketmonsters: [{ id: "pikachu" }, { id: "bulbasaur" }]
    };
    const actionToDispatch = gatherPokemon(mockState);
    const mappedProps = mapDispatchToProps(mockDistpatch);
    mappedProps.gatherPokemon(mockState);
    expect(mockDistpatch).toHaveBeenCalledWith(actionToDispatch);
  });
  it("should call dispatch on anError", () => {
    const mockState = { hasError: true };
    const actionToDispatch = anError(mockState);
    const mappedProps = mapDispatchToProps(mockDistpatch);
    mappedProps.anError(mockState);
    expect(mockDistpatch).toHaveBeenCalledWith(actionToDispatch);
  });
  it("should call dispatch on loading", () => {
    const mockState = { isloadingr: false };
    const actionToDispatch = loading(mockState);
    const mappedProps = mapDispatchToProps(mockDistpatch);
    mappedProps.loading(mockState);
    expect(mockDistpatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
