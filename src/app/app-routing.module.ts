import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Home/home.component";
import { RosterPageComponent } from "./roster-page/roster-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";

const routes: Routes = [
  { path: "", component: AboutPageComponent },
  { path: "roster", component: RosterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
