import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpModule } from '@angular/http';
import { HttpClientJsonpModule } from '@angular/common/http/src/module';

/*
* Tree factory creates a list of "saplings". Saplings are a buffer between Tree Objects
* and JSON data. This list is then sent to the component for instantiation
*/


@Injectable()
export class TreeFactory
{
    saplings : sapling[];
    //constructor calls the getJson method
    constructor(public http: Http)
    { 
       
        this.getJSON();
    
    }
    
    /**
    * Retrieve the JSON encoded data from the remote server(botaniClash server)
    * Using Angular's Http class - then
    * assign this to the saplings array for rendering to the the treeComponent
    *
    * @public
    * @method getJSON()
    * @return {None}
    */
    public getJSON(): void
    {
    
        this.http.get('http://localhost/botani.php')
                 .map(res => res.json())
                 .subscribe(data => {
                  this.saplings = data;
                },
                  err => {
                  console.log("Oops!");
            });
                         

     }
    //Returns the sapling list to the TreeComponent
    getTrees() : sapling[]
    {
        return this.saplings;
    }
}
//interface serves as a buffer between raw JSON and Tree objects
interface sapling
{
    lat : number,
    long : number,
    decs : string[],
    special : string[],
    hidden : boolean
}