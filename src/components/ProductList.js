import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor() {
    super();
    this.products = [];
  }

  async fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      this.products = data;
      this.render();
    } catch (err) {
      console.error("Error! Product not found.", err);
    }
  }
  
  render() {
    return `
      <div class="products-grid">
        ${this.products.map(p => new ProductItem(p).render()).join('')}
      </div>
    `;
  }
}