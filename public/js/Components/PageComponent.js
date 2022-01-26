import Component from "./Component.js";
import SeriesListComponent from "./SeriesListComponent.js";

class PageComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "container", "div");

    this.generateHTML();
    this.pendingSeries();
    this.watchedSeries();
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

  pendingSeries() {
    const parentElement = this.element.querySelector(".series");

    new SeriesListComponent(parentElement, "series", "Pending Series", 0);
  }

  watchedSeries() {
    const parentElement = this.element.querySelector(".series");

    new SeriesListComponent(parentElement, "series", "Watched Series", 0);
  }
}

export default PageComponent;
