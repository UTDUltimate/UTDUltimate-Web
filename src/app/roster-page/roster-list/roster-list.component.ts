import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Player } from "../../models/player";
import { Team } from "../../models/team";
import { TeamService } from "../../services/team.service";
import { compileNgModule } from "@angular/compiler";

@Component({
  selector: "app-roster-list",
  templateUrl: "./roster-list.component.html",
  styleUrls: ["./roster-list.component.css"],
})
export class RosterListComponent implements OnInit {
  selectedRoster: number = 0;
  deselectedRoster: number = 0;

  @Input() teams: Team[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {}

  toggleTeam(previouslyActiveId: number, currentlyActiveId: number) {
    console.log(currentlyActiveId, previouslyActiveId);
    this.selectedRoster = currentlyActiveId;
    this.deselectedRoster = previouslyActiveId;
    console.log(this.selectedRoster, this.deselectedRoster);
  }
}
