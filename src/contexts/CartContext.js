export class CartContext {
    constructor() {
        this.cart = [];
    }

// ADD PRODUCT METHOD:

    addProduct(product) {
        const activeProduct = this.cart.find(item => item.id === product.id);

        if (activeProduct) {
            activeProduct.quantity += 1;
        } else {
            this.cart.push({...product, quantity: 1 });
        }
        console.log("Updated Cart:", this.cart);
    }

// REMOVE PRODUCT METHOD:

    removeProduct(id) {
        this.cart = this.cart.filter(item => item.id !== id);
    }

// UPDATE QUANTITY METHOD:

    updateQuantity(id, newQuantity) {
        const product = this.cart.find(item => item.id === id)
        if (product && newQuantity > 0) {
            product.quantity = newQuantity;
        }
    }

// TOTAL PRICE METHOD:

    getTotalPrice() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

// TOTAL ITEMS METHOD:
    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0)
    }
}