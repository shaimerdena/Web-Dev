import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
{
  id: 1,
  name: "iPhone 15 128GB",
  description: "Apple iPhone 15 128GB Black",
  price: 450000,
  rating: 5,
  image: "https://resources.cdn-kaspi.kz/img/m/p/h83/h90/84596350058526.jpg",
  images: ["https://resources.cdn-kaspi.kz/img/m/p/..."],
  link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-black-114932052/",
  likes: 0,
  categoryId: 1
},
{
  id: 2,
  name: "Samsung Galaxy S23",
  description: "Samsung Galaxy S23 256GB",
  price: 420000,
  rating: 5,
  image: "https://resources.cdn-kaspi.kz/img/m/p/...",
  images: ["..."],
  link: "https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-...",
  likes: 0,
  categoryId: 1
},
{
  id: 3,
  name: "Xiaomi 13",
  description: "Xiaomi 13 256GB",
  price: 320000,
  rating: 4.5,
  image: "...",
  images: ["..."],
  link: "...",
  likes: 0,
  categoryId: 1
},
{
  id: 4,
  name: "Google Pixel 8",
  description: "Google Pixel 8 128GB",
  price: 380000,
  rating: 5,
  image: "...",
  images: ["..."],
  link: "...",
  likes: 0,
  categoryId: 1
},
{
  id: 5,
  name: "OnePlus 12",
  description: "OnePlus 12 256GB",
  price: 350000,
  rating: 4.8,
  image: "...",
  images: ["..."],
  link: "...",
  likes: 0,
  categoryId: 1
}
    
  ];

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}