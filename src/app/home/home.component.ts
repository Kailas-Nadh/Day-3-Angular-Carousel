import { Component } from '@angular/core';
import { BedroomComponent } from '../bedroom/bedroom.component';
import { BathroomComponent } from '../bathroom/bathroom.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { LivingroomComponent } from '../livingroom/livingroom.component';
import { DiningroomComponent } from '../diningroom/diningroom.component';
import { FormsModule } from '@angular/forms';
import { Cat } from '../../models/cat.interface';

@Component({
  selector: 'my-home',
  standalone: true,
  imports: [BedroomComponent,BathroomComponent,KitchenComponent,LivingroomComponent,DiningroomComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  email:string="";
  
  imageDetails:Cat={
    src:"https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg",
    alt:"Cat Image"
  };
  isOk:boolean=true;
  checkData(e:any){
    let value = e.target.value.trim();
    if(value != ""){
      this.isOk=false;
    }
    else{
      this.isOk=true;
    }
  }
  


}
