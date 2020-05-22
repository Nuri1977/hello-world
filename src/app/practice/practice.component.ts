import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  template: `
    <hr>
    <input [(ngModel)]="name" type="text">
    {{name}}
    <h5>Structural Directives (ad/remove HTML elements)</h5>
  
  `,
  styles: [`
  
  `]
})
export class PracticeComponent implements OnInit {

  public name="";

  constructor() { }

  ngOnInit(): void {
  }

}
