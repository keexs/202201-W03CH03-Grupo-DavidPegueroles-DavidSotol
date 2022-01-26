import SeriesListComponent from "./SeriesListComponent.js";

describe("Given a SeriesListComponent component", () => {
  describe("When it receives 'section'", () => {
    test("Then it should create a section element to the dom", () => {
      const section = document.createElement("section");

      const newElement = new SeriesListComponent(section);

      expect(newElement).not.toBeNull();
    });
  });
});
