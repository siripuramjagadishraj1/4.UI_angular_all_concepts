import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-custom',
  templateUrl: './directives-custom.component.html',
  styleUrls: ['./directives-custom.component.css']
})
export class DirectivesCustomComponent implements OnInit {

  ngIfTest = true;
  ngForTest = ["Sai","Kumar"];

  constructor() { }

  ngOnInit() {
  }

}

