import Component from "./Component.js";

describe("Given a Component component", () => {
  describe("When it receives 'div'", () => {
    test("Then it should create a div element to the dom", () => {
      const div = document.createElement("div");

      const newElement = new Component(div);

      expect(newElement).not.toBeNull();
    });
  });
});
