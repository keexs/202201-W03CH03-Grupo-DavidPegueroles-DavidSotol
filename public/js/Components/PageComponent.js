/* eslint-disable no-new */
import Component from "./Component.js";
import SeriesListComponent from "./SeriesListComponent.js";
import series from "../series.js";

class PageComponent extends Component {
  filteredWatchedSeries;
  filteredPendingSeries;

  constructor(parentElement) {
    super(parentElement, "container", "div");

    this.generateHTML();
    this.filterSeries();
    this.seriesList();
  }

  generateHTML() {
    this.element.innerHTML = `
      <header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
          
          
          </section>
          </main>
          `;
  }

  filterSeries() {
    this.filteredWatchedSeries = series.filter((serie) => serie.watched);

    this.filteredPendingSeries = series.filter((serie) => !serie.watched);
  }

  seriesList() {
    const parentElement = this.element.querySelector(".series");
    const filteredPendingSeriesLength = this.filteredPendingSeries.length;
    const filteredWatchedSeriesLength = this.filteredWatchedSeries.length;

    new SeriesListComponent(
      parentElement,
      "series",
      "Pending Series",
      filteredPendingSeriesLength,
      this.filteredPendingSeries
    );

    new SeriesListComponent(
      parentElement,
      "series",
      "Watched Series",
      filteredWatchedSeriesLength,
      this.filteredWatchedSeries
    );
  }
}

export default PageComponent;
