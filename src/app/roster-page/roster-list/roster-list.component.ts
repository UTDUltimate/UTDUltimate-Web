import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Player } from "../../models/player";
import { Team } from "../../models/team";
import { TeamService } from "../../services/team.service";

@Component({
  selector: "app-roster-list",
  templateUrl: "./roster-list.component.html",
  styleUrls: ["./roster-list.component.css"],
})
export class RosterListComponent implements OnInit {
  @Input() team: Team;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {}
}
