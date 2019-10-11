import { Component, OnInit, OnDestroy } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title: string = 'my-dream-app';
   
  ngOnInit(){ }
  
  ngOnDestroy(){ }

  testFocus(){
    console.log('--hello--');
    return "active";
  }

}