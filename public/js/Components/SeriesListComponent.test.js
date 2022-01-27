import SeriesListComponent from "./SeriesListComponent.js";

describe("Given a SeriesListComponent component", () => {
  describe("When it receives 'div'", () => {
    test("Then it should create a section element to the dom", () => {
      const container = document.createElement("div");
      const serie = [
        {
          id: 1,
          name: "The Sopranos",
          creator: "David Chase",
          year: 1999,
          poster:
            "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
          watched: true,
          score: 5,
          emmies: 21,
        },
      ];

      new SeriesListComponent(container, "test", "", "", serie);

      expect(container.querySelector(".test")).not.toBeNull();
    });
  });
});
