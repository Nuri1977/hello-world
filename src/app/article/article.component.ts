import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


  @Input('parentData') public name1;
  @Output() public childEvent = new EventEmitter();
  public emri = "PipeExample";
  public mesazh = "Welcome to Pipes";
  public personazh = {
    "firstName": "Adelina",
    "secondName": "Ismaili"
  }
  public numer = 10000.55555;
  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent() {
    this.childEvent.emit('Hey Codevolution');
  }  
}
