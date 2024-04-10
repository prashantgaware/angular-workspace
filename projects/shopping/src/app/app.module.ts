import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NetflixRegister } from './components/netflix-register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DataBidingComponent } from './components/data-biding/data-biding.component';
import { FormsModule } from "@angular/forms";
import { FakestoreApiComponent } from './components/fakestore-api/fakestore-api.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixRegister,
    LoginComponent,
    HomeComponent,
    DataBidingComponent,
    FakestoreApiComponent,
    ParentComponent,
    ChildComponent,
    ContentProjectionComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ContentProjectionComponent]
})
export class AppModule { }
