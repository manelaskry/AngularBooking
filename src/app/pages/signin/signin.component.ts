import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  rightPanelActive: boolean = false;

  constructor() {}
  

  signUp(): void {
    this.rightPanelActive = true;
  }

  signIn(): void {
    this.rightPanelActive = false;
  }
}
