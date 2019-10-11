import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-references-and-tricks',
  templateUrl: './local-references-and-tricks.component.html',
  styleUrls: ['./local-references-and-tricks.component.css']
})
export class LocalReferencesAndTricksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  serverId:string = "ServerID-String..Example"
  getServerStatus(){
    return 'getServerStatus--Example';
  }

}
