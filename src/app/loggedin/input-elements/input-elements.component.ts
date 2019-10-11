import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-elements',
  templateUrl: './input-elements.component.html',
  styleUrls: ['./input-elements.component.css']
})
export class InputElementsComponent implements OnInit {

  singleItem:MainUsers = {userId:1, userName:"Jagadish", userType:"ADMIN"};
  
  userList:Array<MainUsers> = [
    {userId:1, userName:"Jagadish", userType:"ADMIN"},
    {userId:2, userName:"Rohit", userType:"ADMIN"},
    {userId:3, userName:"Rajaneesh", userType:"DEFAULT"},
    {userId:4, userName:"Sohan", userType:"VIEWER"},
        ];

  constructor() { }

  ngOnInit() {
  }

}

export interface MainUsers{
  userId:number;
  userName:string;
  userType:string;
}
