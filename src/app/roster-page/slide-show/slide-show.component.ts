import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-slide-show",
  templateUrl: "./slide-show.component.html",
  styleUrls: ["./slide-show.component.css"],
})
export class SlideShowComponent implements OnInit {
  selectedContent: number = 1;
  deselectedContent: number = 1;

  @Input() contentSections: Array<{
    key: number;
    title: string;
    roster: Array<any>;
  }>;

  constructor() {}

  ngOnInit(): void {}

  toggleActive(previouslyActive: number, currentlyActive: number) {
    this.selectedContent = currentlyActive;
    this.deselectedContent = previouslyActive;
  }
}
