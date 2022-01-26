const { default: Component } = require("./Component.js");

class PageComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "page");
  }
}

export default PageComponent;
