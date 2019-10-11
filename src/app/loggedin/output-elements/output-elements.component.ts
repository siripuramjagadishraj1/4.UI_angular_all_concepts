import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-elements',
  templateUrl: './output-elements.component.html',
  styleUrls: ['./output-elements.component.css']
})
export class OutputElementsComponent implements OnInit {

  eachElement:string = "Jagadish";
  constructor() { }

  ngOnInit() {
  }

  eventGenerated(event){
    console.log(event);
  }

}
