import Component from "./Component.js";
// eslint-disable-next-line import/no-unresolved
import ImageComponent from "./ImageComponent.js";

class SerieComponent extends Component {
  serie;

  constructor(parentElement, className, serie, htmlTag = "li") {
    super(parentElement, className, htmlTag);

    this.serie = serie;

    this.addImage();
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <h4 class="serie__title">${this.serie.name}</h4>
      <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
    `;
  }

  addImage() {
    const parentElement = this.element;
    // eslint-disable-next-line no-unused-vars
    const insertImage = new ImageComponent(parentElement, this.serie);
  }
}

export default SerieComponent;
