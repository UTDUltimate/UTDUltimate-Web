import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-roster-list",
  templateUrl: "./roster-list.component.html",
  styleUrls: ["./roster-list.component.css"],
})
export class RosterListComponent implements OnInit {
  @Input() roster: Array<any>;

  constructor() {}

  ngOnInit(): void {}
}
