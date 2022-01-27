import SerieComponent from "./SerieComponent";

describe("Given SerieComponent", () => {
  describe("When is created", () => {
    test("Then shoud be created", () => {
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

      const serieComponent = new SerieComponent(
        container,
        "class",
        serie,
        "li"
      );

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

      expect(serie.name).toBe(title);
    });
  });
});
