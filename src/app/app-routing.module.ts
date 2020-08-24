import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Home/home.component";
<<<<<<< HEAD
import { AboutPageComponent } from "./about-page/about-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutPageComponent}
=======
import { RosterPageComponent } from "./roster-page/roster-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "roster", component: RosterPageComponent },
>>>>>>> 20a2c25299928c6a04246f47eac5d712d3c61be7
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
