import Component from "./Component.js";

describe("Given a Component component", () => {
  describe("When it receives 'div'", () => {
    test("Then it should create a div element to the dom", () => {
      const container = document.createElement("div");

      new Component(container, "prueba", "div");

      expect(container.querySelector(".prueba")).not.toBeNull();
    });
  });
});
