import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products: Product[] = [
];

  searchText: string = '';
  sortDirection: string = '';

  get filteredProducts(): Product[] {
    let filtered = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );

    if (this.sortDirection === 'asc') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    }

    if (this.sortDirection === 'desc') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }
}
