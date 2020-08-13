import { Component, OnInit } from "@angular/core";
import { Team } from "../../models/team";
import { TeamService } from "../../services/team.service";

@Component({
  selector: "app-team-header-nav",
  templateUrl: "./team-header-nav.component.html",
  styleUrls: ["./team-header-nav.component.css"],
})
export class TeamHeaderNavComponent implements OnInit {
  teams: Team[];
  activeTeam: string;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe((teams) => (this.teams = teams));
  }

  setActive(teamName: string): void {
    this.activeTeam = teamName;
  }
}
