import { Component, QueryList, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  firstName!: string;
  middleName!: string;
  lastName!: string;

  @ViewChildren(NgModel) ngModelElements!: QueryList<NgModel>;

  addData(): void {
    this.ngModelElements.forEach((model) => {
      console.log(model.model);
    });
  }
}
