import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [

    {
        path:'',component:HomeComponent
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'services',component:ServicesComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'**',component:NotFoundComponent
    }


];
