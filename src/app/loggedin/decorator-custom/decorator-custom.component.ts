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

  testFunction(){
    let asim = new Person("Asim", "Hussain");
    console.log(asim.name());
  }

}

function Student(config) {
  return function (target) {
    Object.defineProperty(target.prototype, 'course', { value: () => config.course })
  }
}

@Student({
  course: "angular3"
})
class Person {
  constructor(private firstName, private lastName) {
  }

  public name() {
    return `${this.firstName} ${this.lastName}`;
  }

  protected whoAreYou() {
    return `Hi i'm ${this.name()}`;
  }
}
