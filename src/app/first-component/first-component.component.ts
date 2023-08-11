import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: 'first-component.html',
  styles: [
  ]
})
export class FirstComponentComponent {
  name: string = 'Gustavo Americo Rosa'
  img: string = '/assets/profile.jpeg'
}
