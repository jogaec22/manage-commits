import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommitsComponent } from './components/commits/commits.component';
import { CommitComponent } from './components/commit/commit.component';

@NgModule({
  declarations: [
    AppComponent,
    CommitsComponent,
    CommitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
