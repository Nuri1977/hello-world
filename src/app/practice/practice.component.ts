import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  template: `
    <hr>
    <input [(ngModel)]="name" type="text">
    {{name}}
  
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
