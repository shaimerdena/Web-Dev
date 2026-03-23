import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  remove = output<number>();

  isLiked = false;
  localLikes = 0;

  ngOnInit() {
    this.localLikes = this.product().likes;
  }

  like() {
    this.localLikes++;
    this.isLiked = true;
  }
  deleteMe(){
    this.remove.emit(this.product().id);
  }
  getTelegramUrl(){
    const p = this.product();
    return `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
  }
}
