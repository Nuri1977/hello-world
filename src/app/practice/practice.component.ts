import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  template: `
    <hr>
    <input [(ngModel)]="name" type="text">
    {{name}}
    <hr>
    <h5>Structural Directives (ad/remove HTML elements)</h5>
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h4>ngIf directive </h4>
    </ng-template>

    <ng-template #elseBlock>
      <h4>ngIf directive is hidden</h4>
    </ng-template>
  
  `,
  styles: [`
  
  `]
})
export class PracticeComponent implements OnInit {

  public name="";
  displayName = false;

  constructor() { }

  ngOnInit(): void {
  }

}
