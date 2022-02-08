import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponeComponent } from './compone/compone.component';
import { ComptwoComponent } from './comptwo/comptwo.component';
import { ParentComponent } from './parent/parent.component';
import { CompthreeComponent } from './compthree/compthree.component';
import { FilteritComponent } from './filterit/filterit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponeComponent,
    ComptwoComponent,
    ParentComponent,
    CompthreeComponent,
    FilteritComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
