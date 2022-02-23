import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponeComponent } from './compone/compone.component';
import { ComptwoComponent } from './comptwo/comptwo.component';
import { ParentComponent } from './parent/parent.component';
import { CompthreeComponent } from './compthree/compthree.component';
import { FilteritComponent } from './filterit/filterit.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BhagiComponent } from './bhagi/bhagi.component';
import { JaiComponent } from './jai/jai.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { RightoneComponent } from './rightone/rightone.component';
import { RighttwoComponent } from './righttwo/righttwo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponeComponent,
    ComptwoComponent,
    ParentComponent,
    CompthreeComponent,
    FilteritComponent,
    BhagiComponent,
    JaiComponent,
    PostsComponent,
    HomeComponent,
    RightoneComponent,
    RighttwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
