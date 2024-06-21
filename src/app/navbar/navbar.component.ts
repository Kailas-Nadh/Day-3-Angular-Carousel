import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';

@Component({
  selector: 'my-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
