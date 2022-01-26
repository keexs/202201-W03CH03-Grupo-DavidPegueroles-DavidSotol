import Component from "./Component.js";

class SerieComponent extends Component {
  serie;

  constructor(parentElement, className, htmlTag, serie) {
    super(parentElement, className, htmlTag);

    this.serie = serie;

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <h4 class="serie__title">${this.serie.name}</h4>
      <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
    `;
  }
}

export default SerieComponent;
