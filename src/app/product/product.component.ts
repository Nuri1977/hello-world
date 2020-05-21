import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-product]',
  template: `<div>
              Inline template for products
            </div>`,
  styles: [` 
    div {
      color: red;
    }
  `]
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
