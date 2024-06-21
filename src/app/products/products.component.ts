import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Product } from '../../models/product.interface';
import { Category } from '../../models/category.interface';
 
@Component({
    selector: 'my-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [CardComponent]
})
export class ProductsComponent {
  categories: Category[] = [];
 
 
  constructor() {
    this.fetchData();
  }
 
  async fetchData() {
    const url = 'https://dummyjson.com/products';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      const beautyProducts = data.products.filter((product: Product) => product.category === 'beauty').sort((a: { weight: number; }, b: { weight: number; }) => a.weight - b.weight);
      const groceries = data.products.filter((product: Product) => product.category === 'groceries').sort((a: { weight: number; }, b: { weight: number; }) => a.weight - b.weight);
      const electronics = data.products.filter((product: Product) => product.category === 'fragrances').sort((a: { weight: number; }, b: { weight: number; }) => a.weight - b.weight);
      const furniture = data.products.filter((product: Product) => product.category === 'furniture').sort((a: { weight: number; }, b: { weight: number; }) => a.weight - b.weight);
 
      this.categories = [
        { 
          name: 'Beauty Products', 
          products: beautyProducts 
        },
        { 
          name: 'Groceries', 
          products: groceries 
        },
        { 
          name: 'Electronics', 
          products: electronics 
        },
        { 
          name: 'Furniture', 
          products: furniture 
        }
      ];
    }
    catch{
      console.log("error")
    }
  }
 
  }