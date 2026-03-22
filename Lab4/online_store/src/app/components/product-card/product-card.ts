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

  getTelegramURL(): string{
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Check out this product: ${this.product.name}`);

    return `https://t.me/share/url?url=${url}&text=${text}`;
  }
}
