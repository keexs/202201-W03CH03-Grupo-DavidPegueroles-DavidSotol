import PageComponent from "./PageComponent.js";

describe("Given a PageComponent component", () => {
  describe("When it receives 'div'", () => {
    test("Then it should create a div element to the dom", () => {
      const container = document.createElement("div");

      new PageComponent(container);

      expect(container.querySelector(".container")).not.toBeNull();
    });
  });
});
