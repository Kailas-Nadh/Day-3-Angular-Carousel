import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from "./admin/admin.component";
import { ButtonComponent } from "./button/button.component";
import { ProductsComponent } from "./products/products.component";
import { Product } from '../models/product.interface';
import { SearchProductsComponent } from "./search-products/search-products.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from './pages/about/about.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, AdminComponent, ButtonComponent, ProductsComponent, SearchProductsComponent, NavbarComponent]
})
export class AppComponent {
  title = 'Kailas';
  name:string="Makane";
  isAdmin:boolean=false;
  btn_value="Sign In";

  data: any = [
    { id: 1, title: "Trivandrum", description: "The capital city of Kerala which is known for its beaches and historic landmarks." },
    { id: 2, title: "Kollam", description: "Famous for its backwaters, beaches, and traditional cashew processing industry." },
    { id: 3, title: "Pathanamthitta", description: "Known as the headquarters of pilgrimage in Kerala with numerous temples and religious festivals." },
    { id: 4, title: "Alappuzha", description: "Renowned for its backwaters, houseboat cruises, and annual Nehru Trophy Boat Race." },
    { id: 5, title: "Kottayam", description: "Lush landscapes and serene backwaters, known as the land of letters, latex, and lakes." },
    { id: 6, title: "Idukki", description: "Famous for its wildlife sanctuaries, hill stations, spice plantations, and the Idukki Arch Dam." },
    { id: 7, title: "Ernakulam", description: "Commercial capital of Kerala, known for its vibrant culture, cuisine, and historical monuments." },
    { id: 8, title: "Thrissur", description: "Cultural capital of Kerala, famous for its colorful festivals, temples, and art forms." },
    { id: 9, title: "Palakkad", description: "Known as the gateway to Kerala due to its geographical significance, rich flora, and fauna." },
    { id: 10, title: "Malappuram", description: "Renowned for its cultural diversity, historical significance, and scenic beauty." },
    { id: 11, title: "Kozhikode", description: "Historical city known for its spice trade, beaches, and traditional Malabar cuisine." },
    { id: 12, title: "Wayanad", description: "Picturesque hill station famous for its wildlife, waterfalls, and natural beauty." },
    { id: 13, title: "Kannur", description: "Known for its pristine beaches, handloom industry, Theyyam rituals, and historic forts." },
    { id: 14, title: "Kasaragod", description: "Northernmost district of Kerala with beautiful beaches, forts, and traditional arts." }
];

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
