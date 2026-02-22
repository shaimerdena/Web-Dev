import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Short description here",
    price: 10000,
    rating: 4.5,
    image: "https://via.placeholder.com/300",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz"
  },
  {
    id: 2,
    name: "Product 2",
    description: "Short description here",
    price: 20000,
    rating: 4.0,
    image: "https://via.placeholder.com/300",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz"
  },
  {
    id: 3,
    name: "Product 3",
    description: "Short description here",
    price: 10000,
    rating: 4.5,
    image: "https://via.placeholder.com/300",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz"
  },
  {
    id: 4,
    name: "Product 4",
    description: "Short description here",
    price: 10000,
    rating: 4.5,
    image: "https://via.placeholder.com/300",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz"
  },
  {
    id: 5,
    name: "Product 5",
    description: "Short description here",
    price: 10000,
    rating: 4.5,
    image: "https://via.placeholder.com/300",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz"
  },
  {
    id: 6,
    name: "Product 6",
    description: "Short description here",
    price: 10000,
    rating: 4.5,
    image: "https://via.placeholder.com/300",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz"
  },
  {
    id: 7,
    name: "Product 7",
    description: "Short description here",
    price: 10000,
    rating: 4.5,
    image: "https://via.placeholder.com/300",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz"
  },
  {
    id: 8,
    name: "Product 8",
    description: "Short description here",
    price: 10000,
    rating: 4.5,
    image: "https://via.placeholder.com/300",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz"
  },
  {
    id: 9,
    name: "Product 9",
    description: "Short description here",
    price: 10000,
    rating: 4.5,
    image: "https://via.placeholder.com/300",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz"
  },
  {
    id: 10,
    name: "Product 10",
    description: "Short description here",
    price: 10000,
    rating: 4.5,
    image: "https://via.placeholder.com/300",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz"
  },
  {
    id: 11,
    name: "Product 10",
    description: "Short description here",
    price: 10000,
    rating: 4.5,
    image: "https://via.placeholder.com/300",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz"
  },
  {
    id: 12,
    name: "Product 10",
    description: "Short description here",
    price: 10000,
    rating: 4.5,
    image: "https://via.placeholder.com/300",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz"
  }
];
}
