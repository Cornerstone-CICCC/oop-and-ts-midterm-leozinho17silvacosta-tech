import { Component } from "../common/Component.js";

export class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return `
      <section class="about-section">
        <div class="about-container">
          <h1 class="about-title">ABOUT US</h1>
          <p class="about-text"> Welcome to <strong>MarketFake</strong>! We are the leading simulation store dedicated to providing the best fictional shopping experience. Our mission is to test layouts, practice modern web development, and showcase how a clean interface can transform e-commerce.</p>
          
          <div class="about-stats">
            <div class="stat-item"><strong>100%</strong> <span>Fake Products</span></div>
            <div class="stat-item"><strong>2026</strong> <span>Founded Year</span></div>
            <div class="stat-item"><strong>100.032</strong> <span>Clients</span></div>
          </div>
        </div>
      </section>
    `;
  }
}