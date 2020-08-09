import { Component, OnInit } from "@angular/core";
import { Team } from "../../models/team";
import { TeamService } from "../../services/team.service";

@Component({
  selector: "app-team-header",
  templateUrl: "./team-header.component.html",
  styleUrls: ["./team-header.component.css"],
})
export class TeamHeaderComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe((teams) => (this.teams = teams));
  }
}
