import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.css']
})
export class ObservablesDemoComponent implements OnInit, OnDestroy {

  testSubject:Subject<number> = new Subject();

  constructor() { }

  showtestSubject(){
    this.testSubject.next(Math.round((Math.random() * 100)));
  }

  ngOnInit() {
    this.testSubject.subscribe(
      (data) =>{console.log(data)}

    );
  }

  ngOnDestroy(){
    this.testSubject.unsubscribe();
  }

}
