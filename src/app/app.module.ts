import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { BotaniMapModule } from '../pages/map/map.module';

import { TreeFactory } from '../providers/treefactory';
import { EntryPasserProvider } from '../providers/entry-passer/entry-passer';

import { BotaniMap } from '../pages/map/map';
import { DataCollection } from '../pages/dataCollection/dataCollection'



@NgModule({
  declarations: [
    MyApp,
    DataCollection
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DataCollection
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TreeFactory,
    HttpModule,
    EntryPasserProvider
  ]
})
export class AppModule {}
