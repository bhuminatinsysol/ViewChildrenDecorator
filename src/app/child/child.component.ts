import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  numericValue: number = 0;

  increament(): void {
    this.numericValue++;
  }

  decreament(): void {
    this.numericValue--;
  }
}
