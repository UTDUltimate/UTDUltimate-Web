import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Home/home.component";
import { RosterPageComponent } from "./roster-page/roster-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "roster", component: RosterPageComponent },
<<<<<<< HEAD
  { path: "about", component: AboutPageComponent },
  { path: "contact", component: ContactUsComponent },
=======
  { path: "about" , component: AboutPageComponent}
>>>>>>> 6583d1c709e5404364bbe6c120ef1d4bf4fb358e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
