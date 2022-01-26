import Component from "./Component.js";

class SerieComponent extends Component {
  serie;

  constructor(parentElement, className, serie, htmlTag = "li") {
    super(parentElement, className, htmlTag);

    this.serie = serie;

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <img
        class="serie__poster"
        src="${this.serie.poster}"
        alt="${this.serie.name} poster"
      />
      <h4 class="serie__title">${this.serie.name}</h4>
      <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
    `;
  }
}

export default SerieComponent;
