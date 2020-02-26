import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
//import { HttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';


@Injectable()
export class GlobalServices implements OnInit{

    ngOnInit(){ }
    httpOptions:{};
    constructor(private http:HttpClient){ }

    getAllPlantsList(){
        return this.http.get('http://localhost:8081/getTestData',this.httpOptions).pipe( 
            map (
                (data)=>{return data;}
            )
        );
      }

}