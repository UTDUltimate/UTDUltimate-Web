import { Component, OnInit } from "@angular/core";
import { Team } from "../models/team";
import { TeamService } from "../services/team.service";

@Component({
  selector: "app-roster-page",
  templateUrl: "./roster-page.component.html",
  styleUrls: ["./roster-page.component.css"],
})
export class RosterPageComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe((teams) => (this.teams = teams));
  }
}
