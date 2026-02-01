export class Component {
  constructor(props = {}) {
    this.props = props;
    this.container = null;
  }

  render() {
    throw new Error('Component should have a render() method!');
  }

  mount(container) {
    this.container = container;
    this.container.innerHTML = this.render();
  }
}