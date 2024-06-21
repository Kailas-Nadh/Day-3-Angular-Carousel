import { Component } from '@angular/core';
import { Product } from '../../models/product.interface';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'my-search-products',
  standalone: true,
  imports: [FormsModule,FilterPipePipe,HighlightDirective],
  templateUrl: './search-products.component.html',
  styleUrl: './search-products.component.scss'
})
export class SearchProductsComponent {

  searchKey:string="";

  ngOnInit():void{
    this.fetchProduct();
  }
  productList:Product[]=[];
  fetchProduct = async () => {
    try{
              let response = await fetch('https://dummyjson.com/products', { method: "GET" });
              let fetchedData = await response.json();
              this.productList = fetchedData.products;
              console.log(this.productList);
              
  
    }
    catch(err){
      console.log("Some error occured",err);
    }
              
  }
  

}
