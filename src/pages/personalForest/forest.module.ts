import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalForest } from './forest';

@NgModule({
  declarations: [
    PersonalForest,
  ],
  imports: [
    IonicPageModule.forChild(PersonalForest),
  ],
})
export class PersonalForestModule {}
