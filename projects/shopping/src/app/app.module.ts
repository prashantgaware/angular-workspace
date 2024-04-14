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
import { ForDemoComponent } from './components/for-demo/for-demo.component';
import { ForDemoFakestoreComponent } from './components/for-demo-fakestore/for-demo-fakestore.component';
import { ForDemoTrackByComponent } from './components/for-demo-track-by/for-demo-track-by.component';
import { NasaApiComponent } from './components/nasa-api/nasa-api.component';
import { CardComponent } from './components/card/card.component';
import { ShopperComponent } from './components/shopper/shopper.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { EmiComponent } from './components/emi/emi.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { PatentComponent } from './components/patent/patent.component';

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
    SwitchComponent,
    ForDemoComponent,
    ForDemoFakestoreComponent,
    ForDemoTrackByComponent,
    NasaApiComponent,
    CardComponent,
    ShopperComponent,
    ClassBindingComponent,
    EventBindingComponent,
    EmiComponent,
    BmiComponent,
    PatentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
