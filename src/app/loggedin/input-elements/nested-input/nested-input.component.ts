import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nested-input',
  templateUrl: './nested-input.component.html',
  styleUrls: ['./nested-input.component.css']
})
export class NestedInputComponent implements OnInit {

  @Input('element') element:{userId:number; userName:string; userType:string}; 
  
  constructor() { }

  ngOnInit() {
  }

}
