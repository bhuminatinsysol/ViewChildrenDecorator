import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChildrenDecorator';

  @ViewChildren('inputEl') inputElement!: QueryList<ElementRef>;
  finalName: string = "";
  myFunction(): void {
    // console.log(this.inputElement);
    this.finalName = "";
    this.inputElement.forEach((el:ElementRef) => {
      this.finalName += el.nativeElement.value + ' ';
    });

    this.finalName.trim();
  }

  @ViewChild(ChildComponent) child!: ChildComponent;
  incre(): void {
    this.child.increament();
  }
  decre(): void {
    this.child.decreament();
  }
}
