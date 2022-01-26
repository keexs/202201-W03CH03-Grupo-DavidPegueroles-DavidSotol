const { default: PageComponent } = require("./PageComponent");

class MainHeader extends PageComponent {
  constructor() {
    super();
    this.generateHTML();
  }

  generateHTML() {
    this.element.InnerHTML = `<header class="main-header">
      <h1 class="main-title">My Series</h1>
    </header>`;
  }
}
