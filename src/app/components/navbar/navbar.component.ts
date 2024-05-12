import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoomsComponent } from '../../pages/rooms/rooms.component';
import { ContactComponent } from '../../pages/contact/contact.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
