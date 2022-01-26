import SeriesListComponent from "./Components/SeriesListComponent.js";

const padre = document.querySelector(".series");

const pendingSeries = new SeriesListComponent(
  padre,
  "series-pending",
  "Pending series",
  "4"
);
