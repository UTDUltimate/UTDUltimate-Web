import { Component, OnInit, Input, HostListener } from "@angular/core";
import { SlideShowComponent } from "../slide-show/slide-show.component";

@Component({
  selector: "app-team-header-nav",
  templateUrl: "./team-header-nav.component.html",
  styleUrls: ["./team-header-nav.component.css"],
})
export class TeamHeaderNavComponent implements OnInit {
  currentlyActive: number = 1;
  previouslyActive: number = 1;

  @Input() headerItems: Array<{ key: number; name: string }>;
  @Input() slideShow: SlideShowComponent;

  constructor() {}

  ngOnInit(): void {
    console.log(this.currentlyActive, this.previouslyActive);
  }

  setActive(key: number): void {
    console.log(key);
    this.previouslyActive = this.currentlyActive;
    this.currentlyActive = key;
    console.log(this.currentlyActive, this.previouslyActive);
    this.slideShow.toggleActive(this.previouslyActive, this.currentlyActive);
  }
}
