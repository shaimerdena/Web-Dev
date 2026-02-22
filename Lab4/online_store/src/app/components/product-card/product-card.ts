import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { Input } from '@angular/core';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;
}
