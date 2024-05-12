import { Component } from '@angular/core';
import { ReservationComponent } from '../../pages/reservation/reservation.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [ReservationComponent, RouterLink],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {

}
