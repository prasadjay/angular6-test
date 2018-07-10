import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { JayComponent } from './jay/jay.component';

import {DataService} from './services/data.service';
import {HttpModule} from  '@angular/http';
import { Jay2Component } from './jay2/jay2.component'
import {RouterModule, Routes, Router} from '@angular/router';

/*
const appRoutes: Routes [
  {path:'', component:JayComponent},
  {path:'about', component:Jay2Component}
];
*/

@NgModule({
  declarations: [
    AppComponent,
    JayComponent,
    Jay2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
