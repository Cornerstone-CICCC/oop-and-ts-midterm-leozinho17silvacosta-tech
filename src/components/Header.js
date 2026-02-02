import { Component } from "../common/Component.js";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.cartContext = props.cartContext;
  }

  render() {
    return `
  <header class="main-header">
    <nav class="nav-container">
      <div class="header-logo">
        <img src="./assets/logo.png" class="logo-img">
      </div>

      <h1 class="header-title">MarketFake</h1>

      <button class="menu-toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <ul class="nav-menu">
        <li><button class="nav-link nav-link-home">Home</button></li>
        <li><button class="nav-link nav-link-about">About</button></li>
        
        <div class="header-actions">
          <button class="btn-signin">
            <img src="./assets/login.png" class="login-img">
          </button>
          <button class="btn-cart">
            <img src="./assets/cart.png" class="cart-img"> (${this.cartContext.getTotalItems()})
          </button>
        </div>
      </ul>
    </nav>
  </header>
`;
  }
}