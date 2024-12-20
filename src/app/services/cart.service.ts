import { Injectable } from '@angular/core';
import { Product } from './product.service';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cart: Product[] = [];

    getCart() {
        return this.cart;
    }

    addToCart(product: Product) {
        const existingProduct = this.cart.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
    }

    removeFromCart(product: Product) {
        const existingProduct = this.cart.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantity -= 1; // Diminue la quantité
            if (existingProduct.quantity <= 0) {
                this.cart = this.cart.filter(item => item.id !== product.id); // Retire le produit si la quantité est 0
            }
        }
    }

    // Calcule le prix total du panier
    getTotalPrice() {
        return this.cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    }
}