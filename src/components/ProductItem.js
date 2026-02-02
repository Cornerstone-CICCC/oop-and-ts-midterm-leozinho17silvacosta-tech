import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(product) {
    super();
    this.product = product;
  }

  render() {
    return `
      <div class="product-card">
        <h3>${this.product.title}</h3>
        <img src="${this.product.image}">
        <p><strong>PRICE:</strong> $ ${this.product.price}</p>
        <button class="add-to-cart" data-id="${this.product.id}">Add to Cart</button>
      </div>
    `
  }
}