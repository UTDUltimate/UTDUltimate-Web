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
<<<<<<< HEAD
import { BackgroundCometsComponent } from "./background-comets/background-comets.component";
import { TeamHeaderNavComponent } from "./roster-page/team-header-nav/team-header-nav.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
<<<<<<< HEAD
=======
import { BackgroundCometsComponent } from './background-comets/background-comets.component';
import {NavbarComponent} from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

>>>>>>> 7b84c4725b86970e90587792f8d49e58eb497196
=======
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
>>>>>>> f359f8739495f305570b41183c9e71de9761f94d

@NgModule({
  declarations: [
    AppComponent,
    RosterPageComponent,
    HomeComponent,
    AboutPageComponent,
    FooterComponent,
    NavbarComponent,
    RosterListComponent,
    BackgroundCometsComponent,
<<<<<<< HEAD
    TeamHeaderNavComponent,
    ContactUsComponent,
<<<<<<< HEAD
=======
    ContactUsComponent,
    CarouselComponent
>>>>>>> 7b84c4725b86970e90587792f8d49e58eb497196
=======
    GalleryPageComponent,
>>>>>>> f359f8739495f305570b41183c9e71de9761f94d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    BrowserAnimationsModule,
    MatExpansionModule,
<<<<<<< HEAD
<<<<<<< HEAD
    AmplifyAngularModule,
<<<<<<< HEAD
=======
    NgbModule
>>>>>>> 7b84c4725b86970e90587792f8d49e58eb497196
=======
    MatTabsModule
>>>>>>> 56088f043a069d9a1e71e6eda5aef7a5ec2deb0a
=======
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
>>>>>>> f359f8739495f305570b41183c9e71de9761f94d
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AmplifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
