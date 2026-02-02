import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    this.item = props.item;
    this.CartContext = props.CartContext;
  }

  render() {
    const totalPrice = (this.item.price * this.item.quantity).toFixed(2);

    return `
    <div class="cart-item">
      <img src="${this.item.image}" alt="${this.item.title}">

    <div class="cart-item-info">
      <h4>${this.item.title}</h4>
      <p><strong>PRICE:</strong> $${this.item.price}</p>
      <p><strong>QUANTITY:</strong> (${this.item.quantity}) = ${totalPrice}</p>
    </div>

    <div class="cart-item-actions">
      <div class="quantity-buttons">
        <button class="btn-qty decrease" data-id="${this.item.id}">-</button>
          <span>(${this.item.quantity})</span>
        <button class="btn-qty increase" data-id="${this.item.id}">+</button>
      </div>

        <button class="btn-remove" data-id="${this.item.id}">Remove</button>
      </div>
    </div>
    `
  }
}