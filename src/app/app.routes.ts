import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {SigninComponent} from './pages/signin/signin.component';

import { RoomComponent } from './components/room/room.component';

export const routes: Routes = [
    {path: 'app-home', component: HomeComponent},
    { path: 'app-signin', component: SigninComponent },
    {path: 'app-room', component: RoomComponent},
    
];
