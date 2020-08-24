<<<<<<< HEAD
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RosterPageComponent } from "./roster-page/roster-page.component";
import { HomeComponent } from "./Home/home.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { RosterListComponent } from "./roster-page/roster-list/roster-list.component";
import { BackgroundCometsComponent } from './background-comets/background-comets.component';
import {NavbarComponent} from './navbar/navbar.component';
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

>>>>>>> 81be0ea0a6c17a2b21f5c5d04b059a0ba6a8d897
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    RosterPageComponent,
    HomeComponent,
    AboutPageComponent,
    FooterComponent,
<<<<<<< HEAD
    NavbarComponent,
    RosterListComponent,
    BackgroundCometsComponent,
=======
    ContactUsComponent
>>>>>>> 81be0ea0a6c17a2b21f5c5d04b059a0ba6a8d897
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    BrowserAnimationsModule,
    MatExpansionModule
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
