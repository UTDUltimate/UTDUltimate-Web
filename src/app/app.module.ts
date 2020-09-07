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
import { BackgroundCometsComponent } from "./background-comets/background-comets.component";
import { TeamHeaderNavComponent } from "./roster-page/team-header-nav/team-header-nav.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { MatTooltipModule } from '@angular/material/tooltip';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

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
    TeamHeaderNavComponent,
    ContactUsComponent,
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
    MatTabsModule,
    AmplifyAngularModule,
    MatTooltipModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AmplifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
