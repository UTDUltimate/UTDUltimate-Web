import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RosterPageComponent } from "./roster-page/roster-page.component";
import { HomeComponent } from "./Home/home.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { FooterComponent } from "./footer/footer.component";
import { TeamHeaderComponent } from "./roster-page/team-header/team-header.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    RosterPageComponent,
    HomeComponent,
    AboutPageComponent,
    FooterComponent,
    TeamHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
