import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BotaniMap } from './map';

@NgModule({
  declarations: [
    BotaniMap,
  ],
  imports: [
    IonicPageModule.forChild(BotaniMap),
  ],
})
export class BotaniMapModule {}
