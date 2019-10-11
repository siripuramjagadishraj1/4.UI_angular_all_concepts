import { Pipe, PipeTransform, Inject, Injectable } from '@angular/core';


@Pipe({name:'myCustomPipe'})
export class myCustomPipe implements PipeTransform{

    transform(value: any, ...args: any[]): any{
        console.log(value);
        console.log(args);
        return "Hanuman";
    }
}