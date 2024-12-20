import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  standalone: false,

  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  cart: Product[];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  // Méthode pour supprimer un produit complètement
  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.cart = this.cartService.getCart();
  }

  // Méthode pour incrémenter la quantité
  incrementQuantity(product: Product) {
    this.cartService.addToCart(product);
    this.cart = this.cartService.getCart();
  }

  // Méthode pour décrémenter la quantité
  decrementQuantity(product: Product) {
    const existingProduct = this.cart.find(p => p.id === product.id);
    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity -= 1;
    } else {
      this.removeFromCart(product);
    }
    this.cart = this.cartService.getCart();
  }

  getTotal() {
    return this.cartService.getTotalPrice();
  }
}
