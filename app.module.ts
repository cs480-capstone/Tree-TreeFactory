import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'

//import { AppComponent }  from './app.component';
import { TreeListComponent } from './components/tree.component';

@NgModule({
  imports:      [ BrowserModule , HttpModule],
  declarations: [ TreeListComponent ],
  bootstrap:    [ TreeListComponent ]
})
export class AppModule { }
