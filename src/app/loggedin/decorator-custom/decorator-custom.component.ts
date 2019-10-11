import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator-custom',
  templateUrl: './decorator-custom.component.html',
  styleUrls: ['./decorator-custom.component.css']
})
export class DecoratorCustomComponent implements OnInit {

  constructor() {
    console.log('DecoratorCustomComponent');
   }

  ngOnInit() {
  }

}
