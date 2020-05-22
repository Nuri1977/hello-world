import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-product]',
  template: `
    <div>Welcome {{name}}</div>
    <div>{{name.length}}</div>
    <div>{{name.toLocaleUpperCase()}}</div>
    <h3>{{greetUser()}}</h3>
    <h2>{{siteUrl}}</h2>

            
  `,
  styles: [` 
    div {
      color: red;
    }

    h2 {
      color: blue;
    }
  `]
})
export class ProductComponent implements OnInit {

  public name = "vishwas";
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " + this.name;
  }

}
