import { Component } from "../common/Component.js";
import { ProductList } from "./ProductList.js";
import { CartList } from "./CartList.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { About } from "./About.js"; 
import { Login } from "./Login.js";

export class App extends Component {
  constructor(props) {
    super(props);
    this.productList = new ProductList();
    this.about = new About(); 
    this.login = new Login();
    this.cartContext = props.cartContext;
    
    this.state = {
      currentPage: 'home' 
    };
  }

  mount(container) {
    this.container = container;
    this.container.innerHTML = this.render();

    this.productList.fetchProducts().then(() => {
      this.update();
    });

    this.container.addEventListener('click', (event) => {
      const target = event.target;

// BURGER MENU: //

      if (target.closest('.menu-toggle')) {
        const navMenu = this.container.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
      }

      if (target.classList.contains('nav-link')) {
        const navMenu = this.container.querySelector('.nav-menu');
        if (navMenu) navMenu.classList.remove('active');
      }

// NAVIGATION: // 

      if (target.classList.contains('nav-link-home')) {
        this.state.currentPage = 'home';
        this.update();
      }

      if (target.classList.contains('nav-link-about')) {
        this.state.currentPage = 'about';
        this.update();
      }

// LOGIN: // 

      if (target.closest('.btn-signin')) {
        this.state.currentPage = 'login';
        this.update();
      }

      if (target.closest('.btn-cart')) {
        this.state.currentPage = 'cart';
        this.update();
      }

// CART BUTTONS: // 

      if (target.classList.contains('add-to-cart')) {
        const id = parseInt(target.dataset.id);
        const product = this.productList.products.find(p => p.id === id);
          
        if (product) {
          this.cartContext.addProduct(product);
          this.update();
        }
      }

      if (target.classList.contains('btn-remove')) {
        const id = parseInt(target.dataset.id);
        this.cartContext.removeProduct(id);
        this.update();
      }

      if (target.classList.contains('increase')) {
        const id = parseInt(target.dataset.id);
        const item = this.cartContext.cart.find(i => i.id === id);

        if(item) {
          this.cartContext.updateQuantity(id, item.quantity + 1)
          this.update();
        }
      }

      if (target.classList.contains("decrease")) {
        const id = parseInt(target.dataset.id);
        const item = this.cartContext.cart.find(i => i.id === id);

        if(item && item.quantity > 1) {
          this.cartContext.updateQuantity(id, item.quantity - 1)
          this.update();
        }
      }
    });
  }

  update() {
    this.container.innerHTML = this.render();
  }

  render() {
    const header = new Header({ cartContext: this.cartContext });
    const cartList = new CartList({ cartContext: this.cartContext });
    const footer = new Footer({ cartContext: this.cartContext });
    
    let middleContent = '';

    if (this.state.currentPage === 'home') {
      middleContent = `
        <section class="products-section">
          <h2 class="section-title">PRODUCTS:</h2>
          ${this.productList.render()}
        </section>
        `;
    } else if (this.state.currentPage === 'cart') {
      middleContent = `
        <section class="cart-page-section">
          ${cartList.render()}
        </section>
      `;
    } else if (this.state.currentPage === 'login') {
      middleContent = this.login.render();
    } else {
      middleContent = this.about.render();
    }

    return `
      <div class="main-container">
        ${header.render()}

        <main class="content-layout">
          ${middleContent}
        </main>
        
        ${footer.render()}
      </div>
    `;
  }
}