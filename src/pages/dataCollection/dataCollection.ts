import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'
import { DataParams } from '../map/map'
import { EntryPasserProvider } from '../../providers/entry-passer/entry-passer'

/**
 * Generated class for the SpecialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'dataCollection',
  templateUrl: 'dataCollection.html',
})
export class DataCollection {
  params : DataParams;

  constructor(public navCtrl: NavController, public navParams: NavParams, private passer : EntryPasserProvider, private alert : AlertController) {
    // gets the data points 
    //this.params = navParams.get('params');
    this.params = 
    {
      falling : true,
      flowering : true, 
      pinecone : false, 
      fruting : false
    }
    //this.document.querySelector('button').onClick(() => this.collectData()).
  }
  
//TODO implment the diffrent data collection methods and read the data into entry

  collectData()
  {
    let entry = {data : "passed"};
    this.passer.getEntry(entry)
    this.presentPoints();
    this.navCtrl.pop();
  }

  presentPoints()
  {
    let alert = this.alert.create(
      {
        title : "Data sent!",
        subTitle : "You earned 1000 drops",
        buttons : ["Continue"]
      }
    );
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataCollection');
  }

}


// this will be changed to fit the needs of the database
export interface Entry
{
  data : string
}
