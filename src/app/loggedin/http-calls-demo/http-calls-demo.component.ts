import { Component, OnInit } from '@angular/core';
import { GlobalServices } from 'src/app/global.services';

@Component({
  selector: 'app-http-calls-demo',
  templateUrl: './http-calls-demo.component.html',
  styleUrls: ['./http-calls-demo.component.css']
})
export class HttpCallsDemoComponent implements OnInit {

  constructor(private service:GlobalServices) { }

  ngOnInit() {
  }

  getClick(){
    this.service.getAllPlantsList().subscribe(
      (data) => {console.log(data)}
    );
  }
}
