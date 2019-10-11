import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  constructor() { }

  oneWayBinded:string = "One Way Binded...";
  twoWayBinded:string = "Two way binded...";
  idWayBinded:string = "Id way binded...";

  ngOnInit() {
  }

}
