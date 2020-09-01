import { Component, OnInit, Input, HostListener } from "@angular/core";
import { Team } from "../../models/team";
import { TeamService } from "../../services/team.service";
import { RosterListComponent } from "../roster-list/roster-list.component";

@Component({
  selector: "app-team-header-nav",
  templateUrl: "./team-header-nav.component.html",
  styleUrls: ["./team-header-nav.component.css"],
})
export class TeamHeaderNavComponent implements OnInit {
  activeTeam: number = 0;
  previouslyActive: number = 0;

  @Input() teams: Team[];
  @Input() rosterList: RosterListComponent;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe((teams) => (this.teams = teams));
  }

  setActive(teamId: number): void {
    this.previouslyActive = this.activeTeam;
    this.activeTeam = teamId;
    this.rosterList.toggleTeam(this.previouslyActive, this.activeTeam);
  }
}
