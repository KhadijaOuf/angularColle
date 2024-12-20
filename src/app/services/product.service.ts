import { Injectable } from '@angular/core';

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products: Product[] = [
        { id: 1, name: 'Facial Cleaner', price: 20.00, image: 'assets/img/Facial-cleaner.jpg', quantity: 0 },
        { id: 3, name: 'Exfoliating Scrub', price: 18.00, image: 'assets/img/Facial-cleaner.jpg', quantity: 0 },
        { id: 4, name: 'Vitamin C Toner', price: 22.00, image: 'assets/img/Facial-cleaner.jpg', quantity: 0 },
        { id: 5, name: 'Anti-Aging Cream', price: 50.00, image: 'assets/img/Facial-cleaner.jpg', quantity: 0 },
        { id: 6, name: 'Sunscreen SPF 50', price: 30.00, image: 'assets/img/Facial-cleaner.jpg', quantity: 0 },
        { id: 7, name: 'Face Clay Mask', price: 15.00, image: 'assets/img/Facial-cleaner.jpg', quantity: 0 },

    ];

    getProducts() {
        return this.products;
    }
}