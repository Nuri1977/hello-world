import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  template: `
    <hr>
      <input [(ngModel)]="name" type="text">
      {{name}}
    <hr>
      <h1>Structural Directives (ad/remove HTML elements)</h1>
      <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
      <ng-template #thenBlock>
        <h4>ngIf directive </h4>
      </ng-template>
      <ng-template #elseBlock>
        <h4>ngIf directive is hidden</h4>
      </ng-template>
    <hr>
      <div [ngSwitch] = "color">
        <div *ngSwitchCase="'red'">You picked red color</div>
        <div *ngSwitchCase="'blue'">You picked blue color</div>
        <div *ngSwitchCase="'green'">You picked green color</div>
        <div *ngSwitchDefault>Pick again ngSwitch</div>
      </div>
    <hr> ngFor Expamle
      <div *ngFor="let tech of technologies; index as i">
        <h5>{{i}} {{tech}}</h5>
      </div>
  `,
  styles: [`
  
  `]
})
export class PracticeComponent implements OnInit {

  public name="";
  displayName = false;
  public color= "orange";
  public technologies = ["angular", "react", "vue", "vanila-js"]; 

  constructor() { }

  ngOnInit(): void {
  }

}
