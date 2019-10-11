import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nested-output',
  templateUrl: './nested-output.component.html',
  styleUrls: ['./nested-output.component.css']
})
export class NestedOutputComponent implements OnInit {

@Input('element') element:string="Hello";
@Output() generatedEvent = new EventEmitter<{name:string,type:string}>();

generateEvent(){
    this.generatedEvent.emit({name: 'good Name', type: 'good Name'});
}

  constructor() { }

  ngOnInit() {
  }

}
