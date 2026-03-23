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

  private products: Product[] = [
    {
      id: 1, categoryId: 1, name: "iPhone 15", price: 420000, 
      likes: 0, rating: 4.9, description: "Смартфон Apple iPhone 15 128Gb NanoSIM+eSIM черный",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/?c=750000000"
    },
    {
      id: 2, categoryId: 1, name: "Samsung Galaxy S23", price: 360000, 
      likes: 0, rating: 4.8, description: "Смартфон Samsung Galaxy S23 FE 8 ГБ/128 ГБ зеленый",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h15/h0e/84251435696158.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s23-fe-8-gb-128-gb-zelenyi-113977503/?c=750000000"
    },
    {
      id: 3, categoryId: 1, name: "Xiaomi 13", price: 350000, 
      likes: 0, rating: 4.7, description: "Смартфон Xiaomi 13 12 ГБ/256 ГБ черный",
      image: "https://resources.cdn-kaspi.kz/img/m/p/hd3/h62/86597718310942.png?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/xiaomi-13-12-gb-256-gb-chernyi-109329717/?c=750000000"
    },
    {
      id: 4, categoryId: 1, name: "Google Pixel 9 Pro", price: 630000, 
      likes: 0, rating: 4.9, description: "Смартфон Google Pixel 9 Pro XL 16 ГБ/256 ГБ серый",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h4f/h39/86895793799198.png?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/google-pixel-9-pro-xl-16-gb-256-gb-seryi-122710564/?c=750000000"
    },
    {
      id: 5, categoryId: 1, name: "OnePlus 15", price: 630000, 
      likes: 0, rating: 4.8, description: "Смартфон OnePlus 15 16 ГБ/512 ГБ черный",
      image: "https://resources.cdn-kaspi.kz/img/m/p/p22/p9f/78743998.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/oneplus-15-16-gb-512-gb-chernyi-149783993/?c=750000000"
    },

    {
      id: 11, categoryId: 2, name: "MacBook Air 13", price: 550000, 
      likes: 0, rating: 5.0, description: "Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123",
      image: "https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium", 
      link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000"
    },
    {
      id: 12, categoryId: 2, name: "Dell XPS 13", price: 450000, 
      likes: 0, rating: 4.9, description: "Ноутбук DELL XPS 13 9345 13.4 / 16 Гб / SSD 512 Гб / Win 11 / 210-BMTR",
      image: "https://resources.cdn-kaspi.kz/img/m/p/p00/p2c/43905749.jpeg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/dell-xps-13-9345-13-4-16-gb-ssd-512-gb-win-11-210-bmtr-140113298/?c=750000000"
    },
    {
      id: 13, categoryId: 2, name: "HP Spectre x360", price: 800000, 
      likes: 0, rating: 4.8, description: "Ноутбук HP Spectre x360 2-in-1 16-aa0004ci 16' / 16 Гб / SSD 512 Гб / Win 11 Home / B6ST5EA",
      image: "https://resources.cdn-kaspi.kz/img/m/p/pe5/p5b/24177956.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/hp-spectre-x360-2-in-1-16-aa0004ci-16-16-gb-ssd-512-gb-win-11-home-b6st5ea-134505376/?c=750000000"
    },
    {
      id: 14, categoryId: 2, name: "Lenovo ThinkPad X1 Carbon G13", price: 3750000, 
      likes: 0, rating: 4.9, description: "Ноутбук Lenovo Thinkpad X1 Carbon G13 14' / 64 Гб / SSD 1024 Гб / Win 11 Pro / 21NX00GBFW",
      image: "https://resources.cdn-kaspi.kz/img/m/p/p17/p5b/78361933.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-g13-14-64-gb-ssd-1024-gb-win-11-pro-21nx00gbfw-149679168/?c=750000000"
    },
    {
      id: 15, categoryId: 2, name: "Asus ROG Zephyrus G14", price: 1955000, 
      likes: 0, rating: 4.7, description: "Ноутбук ASUS ROG Zephyrus G14 14э / 32 Гб / SSD 1000 Гб / Без ОС / 90NR0M82-M000W0",
      image: "https://resources.cdn-kaspi.kz/img/m/p/pa2/pe5/48835854.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-14-32-gb-ssd-1000-gb-bez-os-90nr0m82-m000w0-141343982/?c=750000000"
    },

    {
      id: 21, categoryId: 3, name: "Sony WH-1000XM4", price: 170000, 
      likes: 0, rating: 4.9, description: "Наушники Sony WH-1000XM4 черный",
      image: "https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm4-chernyi-100471997/?c=750000000"
    },
    {
      id: 22, categoryId: 3, name: "Bose QuietComfort 45", price: 240000,
      likes: 0, rating: 4.8, description: "Наушники Bose QuietComfort 45 белый",
      image: "https://resources.cdn-kaspi.kz/img/m/p/hae/h01/64317739466782.jpg?format=gallery-medium", 
      link: "https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-45-belyi-103563221/?c=750000000"
    },
    {
      id: 23, categoryId: 3, name: "Apple AirPods Pro 3", price: 120000,
      likes: 0, rating: 4.7, description: "Наушники Apple AirPods Pro 3 белый",
      image: "https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium", 
      link: "https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000"
    },
    {
      id: 24, categoryId: 3, name: "Sennheiser Momentum Sport", price: 130000,
      likes: 0, rating: 4.8, description: "Наушники Sennheiser Momentum Sport зеленый",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h7e/ha0/86334264967198.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/naushniki-sennheiser-momentum-sport-zelenyi-120631272/?c=750000000"
    },
    {
      id: 25, categoryId: 3, name: "Jabra Elite 4", price: 40000,
      likes: 0, rating: 4.7, description: "Наушники Jabra Elite 4 синий",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h6c/hdf/85684396982302.jpg?format=gallery-medium", 
      link: "https://kaspi.kz/shop/p/naushniki-jabra-elite-4-sinii-118225311/?c=750000000"
    },

    {
      id: 31, categoryId: 4, name: "iPad Pro", price: 515000,
      likes: 0, rating: 4.9, description: "Планшет Apple iPad Pro 11 2024 Wi-Fi 11 дюйм 8 Гб/256 Гб черный",
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium", 
      link: "https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000"
    },
    {
      id: 32, categoryId: 4, name: "Samsung Galaxy Tab A9", price: 150000,
      likes: 0, rating: 4.8, description: "Планшет Samsung Galaxy Tab A9 LTE 8.7 дюйм 4 Гб/64 Гб серый",
      image: "https://resources.cdn-kaspi.kz/img/m/p/p3b/p01/77344134.bin?format=gallery-medium", 
      link: "https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-seryi-113807107/?c=750000000"
    },
    {
      id: 33, categoryId: 4, name: "Microsoft Surface Pro 11 X Plus", price: 600000,
      likes: 0, rating: 4.7, description: "Планшет Microsoft Surface Pro 11 X Plus 13 дюйм 16 Гб/512 Гб серебристый",
      image: "https://resources.cdn-kaspi.kz/img/m/p/pb3/p53/12812177.jpg?format=gallery-medium", 
      link: "https://kaspi.kz/shop/p/microsoft-surface-pro-11-x-plus-13-djuim-16-gb-512-gb-serebristyi-131318179/?c=750000000"
    },
    {
      id: 34, categoryId: 4, name: "Lenovo Tab P11 Plus", price: 145000,
      likes: 0, rating: 4.8, description: "Планшет Lenovo Tab P11 Plus TB-J616F ZA940326RU 11 дюйм 4 Гб/128 Гб серый",
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb7/hdb/79994503921694.jpg?format=gallery-medium", 
      link: "https://kaspi.kz/shop/p/lenovo-tab-p11-plus-tb-j616f-za940326ru-11-djuim-4-gb-128-gb-seryi-109848413/?c=750000000"
    },
    {
      id: 35, categoryId: 4, name: "Xiaomi Redmi Pad 2", price: 100000,
      likes: 0, rating: 4.7, description: "Планшет Xiaomi Redmi Pad 2 4G 11 дюйм 4 Гб/128 Гб серый",
      image: "https://resources.cdn-kaspi.kz/img/m/p/p3d/pc9/81439946.jpg?format=gallery-medium", 
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-4-gb-128-gb-seryi-140639842/?c=750000000"
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  getAllProducts(): Product[] {
    return this.products;
  }
}