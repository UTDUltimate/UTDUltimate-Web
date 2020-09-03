import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FAQ } from './faq';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutPageComponent implements OnInit {
  faqs = new FAQ().data;

  constructor() { }

  ngOnInit(): void {  }

}
