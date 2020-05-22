import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <input [id]="myId"  type="text" value="Nuri" class="m-3">
    <input [disabled]="isDisabled" id={{myId}}  type="text" value="Nuri" class="m-3">
    <input bind-disabled="isDisabled" id={{myId}}  type="text" value="Nuri" class="m-3">
    <h2 class="text1">Codevolution</h2>
    <h2 [class]="greenClass">Angular class binding</h2>
    <h2 [class.text2]="hasError"> Conditional class binding</h2>
    <h2 [ngClass]="messageClasses">ngClass example</h2>
    <h3 [style.color]="'orange'">style binding</h3>
    <h3 [style.color]="hasError ? 'red' : 'green'">Conditional style binding</h3>
    <h3 [style.color]="highlightColor">style binding 2</h3>
    <h1 [ngStyle]="titleStyles">ng Style directive</h1>
  `,
  styles: [`
    .text1 {
      color: green;
    }
    .text2 {
      color : red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public myId = "testId";
  public isDisabled = true;
  public greenClass="text1";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text1": !this.hasError,
    "text2": this.hasError,
    "text-special": this.isSpecial
  }
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
