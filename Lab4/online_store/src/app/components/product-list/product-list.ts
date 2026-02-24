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
  {
    id: 1,
    name: "FELT BREED | 30",
    description: "Велосипед FELT FELT BREED30 2023 21 дюйм желтый",
    price: 895999,
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h83/h90/84596350058526.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h61/h4e/84596350255134.jpg?format=gallery-medium",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz/shop/p/velosiped-felt-felt-breed30-27-6-djuim-2023-21-djuim-zheltyi-114932052/?c=750000000"
  },
  {
    id: 2,
    name: "Граф Монте-Кристо",
    description: "Книга Дюма А.: Граф Монте-Кристо Т.1",
    price: 2475,
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hc7/h7f/63878792839198.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/hc8/h87/63878794117150.jpg?format=gallery-medium",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz/shop/p/djuma-a-graf-monte-kristo-t-1-100348891/?c=750000000"
  },
  {
    id: 3,
    name: "Сервер Supermicro",
    description: "Сервер Supermicro VFG-SYS-621P-TRT-421",
    price: 3379143,
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p96/p1b/86367718.jpg?format=gallery-medium",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz/shop/p/supermicro-vfg-sys-621p-trt-421-152142960/?c=750000000"
  },
  {
    id: 4,
    name: "AULA F75",
    description: "Клавиатура AULA F75 Side-Printed черный",
    price: 21997,
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p7e/pd2/111262185.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p5b/pd5/111262190.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p04/pd6/111262196.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p1e/pdf/111262204.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/aula-f75-side-printed-chernyi-120134580/?c=750000000"
  },
  {
    id: 5,
    name: "Canon PowerShot",
    description: "Фотокамера Canon PowerShot G7 X Mark III черный",
    price: 639650,
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/he0/h0b/63813275058206.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h41/h62/63813277646878.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h82/h27/63813280825374.jpg?format=gallery-medium",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz/shop/p/canon-powershot-g7-x-mark-iii-chernyi-2240141/?c=750000000"
  },
  {
    id: 6,
    name: "Гитара акустическая MuzLife",
    description: "Гитара акустическая MuzLife MUSIC ALMATY 05054000 черный",
    price: 16990,
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/pb4/p81/4826880.jpeg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p4a/p7e/4826881.jpeg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pe1/p7a/4826882.jpeg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p77/p77/4826883.jpeg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/gitara-akusticheskaja-muzlife-music-almaty-05054000-chernyi-128973257/?c=750000000"
  },
  {
    id: 7,
    name: "Коврик для мыши",
    description: "Коврик для мыши Японская волна Dart 400x900x3 мм черный",
    price: 1329,
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h1e/hdd/84643036626974.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h49/h02/84643036692510.png?format=gallery-medium",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz/shop/p/japonskaja-volna-dart-400x900x3-mm-chernyi-115099536/?c=750000000"
  },
  {
    id: 8,
    name: "Экшн-камера GoPro",
    description: "Экшн-камера GoPro HERO 11",
    price: 249900,
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha4/h3a/64379158167582.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/hac/h32/64379160297502.jpg?format=gallery-medium",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero-11-106585231/?c=750000000"
  },
  {
    id: 9,
    name: "Компас",
    description: "Компас КОКОС 170936/1 черный",
    price: 490,
    rating: 4.9,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h44/h5e/65118325080094.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h41/ha5/65118327111710.jpg?format=gallery-medium",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300"
    ],
    link: "https://kaspi.kz/shop/p/kokos-170936-1-104954756/?c=750000000"
  },
  {
    id: 10,
    name: "ONYX BOOX Note Air 4 C",
    description: "Электронная книга ONYX BOOX Note Air 4 C черный",
    price: 279355,
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/pc8/p64/7185914.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/pac/p64/7185915.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p90/p64/7185916.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p74/p64/7185917.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/onyx-boox-note-air-4-c-chernyi-129708429/?c=750000000"
  },
  {
    id: 11,
    name: "Decathlon лыжи",
    description: "Decathlon 8808054 163 см черный, белый",
    price: 199900,
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p58/pb5/93421192.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p91/pb5/93421194.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pe5/pb5/93421197.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p92/pff/93421202.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/decathlon-8808054-163-sm-chernyi-belyi-154113964/?c=750000000"
  },
  {
    id: 12,
    name: "Три товарища",
    description: "Книга Ремарк Э. М.: Три товарища",
    price: 2583,
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h67/h40/63826306072606.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/hda/hec/63826309021726.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hb4/h4d/63826312232990.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h69/h92/85704630960158.jpg?format=gallery-medium"
    ],
    link: "https://kaspi.kz/shop/p/remark-e-m-tri-tovarischa-100010730/?c=750000000"
  }
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
