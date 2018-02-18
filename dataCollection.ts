import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Component, Input } from '@angular/core';
import { ToastController } from 'ionic-angular'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpModule } from '@angular/http';
import { HttpClientJsonpModule } from '@angular/common/http/src/module';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { PercentPipe } from '@angular/common/src/pipes/number_pipe';

/*
* DataCollection receives an array of collected data.
* Parses it to json format 
* then sents it to the php layer which will update the database 
*/


@Injectable()
export class DataCollection
{
    /**
    * @name baseURI
    * @type {String}
    * @public
    * @description     Remote URI for sending data to
    */
   private baseURI: string  = "http://localhost/readJSON.php"; //this url has to be replaced with the botaniClash server url
    constructor(public http: Http, public toastCtrl  : ToastController)
    { 
    
    }

    /**
    * Save a new entry for an Evergreen tree that has been added from dataCollection form
    * Use angular's http post method to submit the record data
    *
    * @public
    * @return {None}
    */
   createEntryEvergreen(user: number, tree : string, type: string, time: Time, breaking: number, young: number, pollen: number, open:PercentPipe, release: string, unripe: number, ripe: number, recent: number ) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "user": user, "tree" : tree, "type": type, "time": time, "breaking": breaking, "young": young, "pollen": pollen, "open": open, "release": release, "unripe": unripe, "ripe": ripe, "recent": recent},
          url       : any      	= this.baseURI;

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         this.sendNotification(`Congratulations the information you provided was successfully recorded`);
      },
      (error : any) =>
      {
         this.sendNotification('Something went wrong!');
      });
   }

   /**
    * Save a new entry for a non Evergreen tree that has been added from dataCollection form
    * Use angular's http post method to submit the record data
    *
    * @public
    * @return {None}
    */
   createEntryNonEvergreen(user: number, tree : string, type: string, time: Time, buds: number, unfolding: PercentPipe, full: PercentPipe,  color: PercentPipe, falling: number, flowers: PercentPipe, openFlowers: PercentPipe, fruit: number, ripeFruit: PercentPipe, recentFruit: number) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "user": user, "tree" : tree, "type": type, "time": time, "buds": buds, "unfolding": unfolding, "full": full,  "color": color, "falling": falling, "flowers": flowers, "openFlowers": openFlowers, "fruit":fruit, "ripeFruit": ripeFruit, "recentFruit": recentFruit },
          url       : any      	= this.baseURI;

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         this.sendNotification(`Congratulations the information you provided was successfully recorded`);
      },
      (error : any) =>
      {
         this.sendNotification('Something went wrong!');
      });
   }
   
    /**
    * Manage notifying the user of the outcome of remote operations
    *
    * @public
    * @method sendNotification
    * @param message 	{String} 			Message to be displayed in the notification
    * @return {None}
    */
   sendNotification(message : string)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 3000
      });
      notification.present();
   }
}
