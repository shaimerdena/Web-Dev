import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  categories: Category[] = [];
  allProducts: Product[] = [];   
  filteredProducts: Product[] = [];  
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getAllProducts(); 
    this.filteredProducts = [...this.allProducts]; 
  }
  selectCategory(categoryId: number | null) {
    this.selectedCategoryId = categoryId;
    
    if (categoryId === null) {
      this.filteredProducts = [...this.allProducts];
    } else {
      this.filteredProducts = this.allProducts.filter(p => p.categoryId === categoryId);
    }
  }
  onDelete(id: number) {
  this.allProducts = this.allProducts.filter(p => p.id !== id);
  
  if (this.selectedCategoryId === null) {
    this.filteredProducts = [...this.allProducts];
  } else {
    this.filteredProducts = this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }
}
}