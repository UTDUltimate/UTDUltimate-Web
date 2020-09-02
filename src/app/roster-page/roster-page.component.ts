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
  navHeaders: Array<{ key: number; name: string }>;
  rosterSections: Array<{
    key: number;
    title: string;
    roster: Array<any>;
  }>;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe((teams) => (this.teams = teams));
  }

  setNav(): void {
    this.navHeaders = this.teams.map((team) => ({
      key: team.id,
      name: team.name + " Roster",
    }));
  }

  getRosters(): void {
    // for (var team of this.teams) {
    //   let rosterInfo = {
    //     key: team.id.toString(),
    //     title: team.name + " Roster",
    //     content: team.roster,
    //   };
    //   this.rosterSections.push(rosterInfo);
    // }
    this.rosterSections = this.teams.map((team) => ({
      key: team.id,
      title: team.name + " Roster",
      roster: team.roster,
    }));
  }
}
