import Component from "./Component.js";

class ImageComponent extends Component {
  serie;

  constructor(parentElement, serie) {
    super(parentElement, "serie-poster", "img");
    this.img = serie;
  }
}

export default ImageComponent;
