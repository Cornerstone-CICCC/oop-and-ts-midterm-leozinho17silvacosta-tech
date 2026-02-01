import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props);
    this.item = props.item;
    this.cartContext = props.cartContext;
  }

  render() {
    const items = this.cartContext.cart;

    if(items.length === 0) {
      return `
        <div class="cart-empty-state">
          <p>Your cart is empty.</p>
          <img src="./assets/sad-dog.png" class="dog-png">
          <button class="nav-link-home btn-back">Back to Shop</button>
        </div>
      `;
    } else {
      return `
        <div class="cart-list">
          <h2>Shopping Cart:</h2>
          <div class="cart-items-container">
            ${items.map(item => new CartItem({ 
              item, 
              cartContext: this.cartContext 
            }).render()).join('')}
          </div>
        
          <div class="cart-summary">
            <h3><strong>Cart Total:</strong> $${this.cartContext.getTotalPrice().toFixed(2)}</h3>
            
            <div class="cart-actions">
              <button class="nav-link-home btn-back">Continue Shopping</button>
              <button class="btn-checkout">Checkout Now</button>
            </div>
          </div>
        </div>
      `
    }
  }
}