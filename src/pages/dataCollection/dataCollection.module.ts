import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataCollection } from './dataCollection';

@NgModule({
  declarations: [
    DataCollection,
  ],
  imports: [
    IonicPageModule.forChild(DataCollection),
  ],
})
export class DataCollectionModule {}
