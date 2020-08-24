import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Home/home.component";
import { RosterPageComponent } from "./roster-page/roster-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "roster", component: RosterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
