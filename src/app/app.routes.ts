import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {SigninComponent} from './pages/signin/signin.component';


export const routes: Routes = [
    { path: 'app-signin', component: SigninComponent },
    { path: 'app-home', component: HomeComponent},
   
];
