import Component from "./Component.js";

class SeriesListComponent extends Component {
  title;
  number;

  constructor(parentElement, className, title, number) {
    super(parentElement, className, "section");

    this.title = title;
    this.number = number;

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
            <h3 class="subsection-title">${this.title}</h3>
            <p class="info">You have ${this.number} series pending to watch</p>

            <ul class="series-list">
            </ul>
    `;
  }
}

export default SeriesListComponent;
