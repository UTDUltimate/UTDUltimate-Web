import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Home/home.component";
import { RosterPageComponent } from "./roster-page/roster-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { GalleryPageComponent } from './gallery-page/gallery-page.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "roster", component: RosterPageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "gallery", component: GalleryPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
