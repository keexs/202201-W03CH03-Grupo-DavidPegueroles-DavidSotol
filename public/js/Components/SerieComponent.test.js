import SerieComponent from "./SerieComponent";

describe("Given SerieComponent", () => {
  describe("When it's instanced inside a container", () => {
    test("Then shoud be create a li element inside the container", () => {
      const serie = {
        id: 1,
        name: "The Sopranos",
        creator: "David Chase",
        year: 1999,
        poster: "ImageSubstitute",
        watched: true,
        score: 5,
        emmies: 21,
      };

      const container = document.createElement("div");

      new SerieComponent(container, "class", serie, "li");

      expect(container.querySelector("li")).not.toBeNull();
    });
  });

  describe("When it recives a serie with 'The Sopanos' name", () => {
    test("Then shoud render 'The Sopranos' in serie__title", () => {
      const serie = {
        id: 1,
        name: "The Sopranos",
        creator: "David Chase",
        year: 1999,
        poster: "ImageSubstitute",
        watched: true,
        score: 5,
        emmies: 21,
      };
      const container = document.createElement("div");
      const title = "The Sopranos";
      const serieComponent = new SerieComponent(
        container,
        "class",
        serie,
        "li"
      );

      expect(serieComponent.serie.name).toBe(title);
    });
  });
  describe("When it recives a serie with 'mageSubstitute' poster", () => {
    test("Then shoud render 'The Sopranos' in serie__poster", () => {
      const serie = {
        id: 1,
        name: "The Sopranos",
        creator: "David Chase",
        year: 1999,
        poster: "ImageSubstitute",
        watched: true,
        score: 5,
        emmies: 21,
      };
      const container = document.createElement("div");
      const imgPoster = "ImageSubstitute";
      const serieComponent = new SerieComponent(
        container,
        "class",
        serie,
        "li"
      );

      expect(serieComponent.serie.poster).toBe(imgPoster);
    });
  });
});
