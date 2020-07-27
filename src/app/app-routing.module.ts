import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RosterPageComponent } from "./roster-page/roster-page.component";

const routes: Routes = [{ path: "roster", component: RosterPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
