import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveContainer } from './live/live.container';
import { SubLiveComponent } from './live/sub-live.component';
import { SubLive2Component } from './live/sub-live2.component';
import { SubSubLiveComponent } from './live/sub-sub-live.component';
import { SubSubLive2Component } from './live/sub-sub-live2.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveContainer,
    SubLiveComponent,
    SubLive2Component,
    SubSubLiveComponent,
    SubSubLive2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
