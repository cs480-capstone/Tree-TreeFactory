import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DivisionalLeaderboard } from './divisionalLeaderboard';

@NgModule({
  declarations: [
    DivisionalLeaderboard,
  ],
  imports: [
    IonicPageModule.forChild(DivisionalLeaderboard),
  ],
})
export class DivisionalLeaderboardModule {}
