/* eslint-disable no-new */
import Component from "./Component.js";
import SerieComponent from "./SerieComponent.js";

class SeriesListComponent extends Component {
  title;
  number;
  series;

  constructor(parentElement, className, title, number, series) {
    super(parentElement, className, "section");

    this.title = title;
    this.number = number;
    this.series = series;

    this.generateHTML();
    this.generateSerie();
  }

  generateHTML() {
    this.element.innerHTML = `
            <h3 class="subsection-title">${this.title}</h3>
            <p class="info">You have ${this.number} series pending to watch</p>

            <ul class="series-list">
            </ul>
    `;
  }

  generateSerie() {
    this.series.forEach((serie) => {
      const parentElement = this.element.querySelector(".series-list");
      new SerieComponent(parentElement, "serie", serie);
    });
  }
}

export default SeriesListComponent;
