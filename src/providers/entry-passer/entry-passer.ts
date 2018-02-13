//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataCollection, Entry } from '../../pages/dataCollection/dataCollection'

/*
  Generated class for the EntryPasserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EntryPasserProvider {

  entry : Entry;

  constructor() {
    console.log('Hello EntryPasserProvider Provider');
  }

  getEntry(entry : Entry)
  {
    this.entry = entry;
    console.log(entry.data);
  }

}

