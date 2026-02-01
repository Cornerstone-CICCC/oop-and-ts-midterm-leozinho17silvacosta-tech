import { Component } from "../common/Component.js";

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.cartContext = props.cartContext;
  }

  render() {
    return `
      <footer class="main-footer">
        <div class="footer-container">
          <div class="footer-section">
            <h2 class="footer-logo-text">MarketFake</h2>
            <p class="footer-p-text">your cheap, stylish and unique shop</p>
          </div>

          <div class="footer-section">
            <img src="./assets/neymar-logo.jpeg" class="logo-img">
          </div>

          <div class="footer-section">
            <h2 class="footer-logo-text">Contact </h2>
            <p class="footer-p-text">✉: suporte@marketfake.com</p>
            <p class="footer-p-text">☎: (1) 234-5678</p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 MarketFake. All Rights Reserved.</p>
        </div>
      </footer>
    `;
  }
}