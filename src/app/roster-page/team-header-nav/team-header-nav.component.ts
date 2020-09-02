import { Component, OnInit, Input, HostListener } from "@angular/core";
// import { SlideShowComponent } from "../slide-show/slide-show.component";

@Component({
  selector: "app-team-header-nav",
  templateUrl: "./team-header-nav.component.html",
  styleUrls: ["./team-header-nav.component.css"],
})
export class TeamHeaderNavComponent implements OnInit {
  currentlyActive: number = 0;
  previouslyActive: number = 0;

  @Input() headerItems: Array<{ key: number; name: string }>;
  @Input() SlideShowComponent: Component;

  constructor() {}

  ngOnInit(): void {}

  setActive(key: number): void {
    this.previouslyActive = this.currentlyActive;
    this.currentlyActive = key;
    this.SlideShowComponent.toggleActive(
      this.previouslyActive,
      this.currentlyActive
    );
  }
}
