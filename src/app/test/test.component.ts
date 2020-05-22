import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <input [id]="myId"  type="text" value="Nuri" class="m-3">
    <input [disabled]="isDisabled" id={{myId}}  type="text" value="Nuri" class="m-3">
    <input bind-disabled="isDisabled" id={{myId}}  type="text" value="Nuri" class="m-3">
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public myId = "testId";
  public isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }

}
