import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RosterPageComponent } from "./roster-page/roster-page.component";
import { HomeComponent } from "./Home/home.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    RosterPageComponent,
    HomeComponent,
    AboutPageComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
