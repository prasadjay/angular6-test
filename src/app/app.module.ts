import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { JayComponent } from './jay/jay.component';

import {DataService} from './services/data.service';
import {HttpModule} from  '@angular/http';
import { Jay2Component } from './jay2/jay2.component'
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path:'', component: JayComponent},
  { path:'about', component:Jay2Component},
  { path: '**', component:PageNotFoundComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    JayComponent,
    Jay2Component,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
    //RouterModule.forRoot(appRoutes, { useHash: true })  //When you want to route in single page using # without using <a name="targetname"></a> in html..
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
