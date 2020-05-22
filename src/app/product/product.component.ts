import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-product]',
  template: `
    <div>Welcome {{name}}</div>
    <div>{{name.length}}</div>
    <div>{{name.toLocaleUpperCase()}}</div>
    <h3>{{greetUser()}}</h3>
    <h2 class="mb-5">{{siteUrl}}</h2>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greeting='Welcome Nuri'">Greet1</button>
    {{greeting}}
    <div class="m-2">
      <input #myInput type="text" placeholder="reference variable">
      <button (click)="logMessage(myInput)">Log1</button>
      <button (click)="logMessage(myInput.value)">Log2</button>
    </div>

            
  `,
  styles: [` 
    div {
      color: grey;
    }

    h2 {
      color: blue;
    }
  `]
})
export class ProductComponent implements OnInit {

  public name = "vishwas";
  public siteUrl = window.location.href;
  public greeting = "";
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " + this.name;
  }

  onClick(event) {
    console.log(event);
    this.greeting = 'Welcome to Codevolution';
  }

  logMessage(value){
    console.log(value)
  }

}
